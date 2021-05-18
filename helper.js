function mean(length,arr){
    const total = arr.reduce((total,value)=>{
        return total + parseInt(value)
    },0)
    const mean = total / length
    return mean.toFixed(1)
}


function median(length,arr){
    if(length % 2 == 0){
        const total = [arr[length / 2 - 1 ],arr[length / 2]].reduce((acc,next)=>{
            return acc + parseInt(next)
        },0)

        return total / 2 
    }else{
        const index = Math.ceil(length / 2 - 1)
        return arr[index]
    }
}

function modeObj(arr){
    const counts = {}

    arr.forEach(element => {
        counts[element] = (counts[element] || 0) + 1
    });

    return counts
}


function mode(obj){
    const allVal = Object.values(obj)
    const allKey = Object.keys(obj)
    const max = Math.max(...allVal)
    
    for(key of allKey){
        if(obj[key] === max){
            return key
        }
    }
}


module.exports = {
    mean,
    median,
    modeObj,
    mode
}