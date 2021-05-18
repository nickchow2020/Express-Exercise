const express = require("express")
const expressError = require("./expressError")
const { mean,
        median,
        modeObj,
        mode} = require("./helper")

app = express() 

app.get("/mean",(req,res,next)=>{
    try{
            if (!req.query.nums) throw new expressError("nums are required.",400)
            const numbers = req.query.nums.split(",")
            const length = numbers.length

            for(val of numbers){
                if(!parseInt(val)) throw new expressError(`${val} query must be a integer number`,400)
            }

            const _mean = mean(length,numbers)

            return res.json({
                response:{
                    operation: "mean",
                    value:_mean
                }
            })
    }catch (err){
        return next(err)
    }
})


app.get("/median",(req,res,next)=>{
    try{
        if (!req.query.nums) throw new expressError("nums are required.",400)
        const numbers = req.query.nums.split(",").sort()
        const length = numbers.length
    
        for(val of numbers){
            if(!parseInt(val)) throw new expressError(`${val} query must be a integer number`,400)
        }

        let _median = median(length,numbers)
        
        return res.json({
            response:{
                operation: "median",
                value:_median
            }
        })
    }catch (err){
        return next(err)
    }
    
})

app.get("/mode",(req,res,next)=>{
    try{
        if (!req.query.nums) throw new expressError("nums are required.",400)
        const numbers = req.query.nums.split(",").sort()

        for(val of numbers){
            if(!parseInt(val)) throw new expressError(`${val} query must be a integer number`,400)
        }

        let counts = modeObj(numbers)

        let _mode = mode(counts)
    
        return res.json({
            response:{
                operation: "Mode",
                value:_mode
            }
        })
    }catch(err){
        return next(err)
    }
    
})

app.use((req,res,next) => {
    const notFoundError = new expressError("Page Not Found",404)
    return next(notFoundError)
})


app.use((err,req,res,next)=>{
    const errorMsg = err.message
    const status = err.status

    return res.status(status).json({
        error : {errorMsg,status}
    })
})


app.listen(3000,function(){
    console.log("Port 3000 is running")
})