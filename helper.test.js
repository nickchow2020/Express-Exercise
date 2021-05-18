const { text } = require("express")
const {mean,median,modeObj,mode} = require("./helper")

describe("testing helper function",function(){
    it("testing average value --mean helper",function(){
        const givingArray = [1,2,3,4,5]
        const ave = mean(5,givingArray)
        expect(ave).toEqual("3.0")
    })

    it("testing median value odd --median helper",function(){
        const givingArray = [1,2,3,4,5]
        const ave = median(5,givingArray)
        expect(ave).toEqual(3)
    })

    it("testing median value even --median helper",function(){
        const givingArray = [1,2,3,4,5,6]
        const ave = median(6,givingArray)
        expect(ave).toEqual(3.5)
    })

    it("testing modeObj--modeObj helper",function(){
        const givingArray = [1,2,3]
        const counts = modeObj(givingArray)
        expect(counts).toEqual({1:1,2:1,3:1})
    })

    it("testing modeObj--modeObj helper with string array",function(){
        const givingArray = ["1","2","3"]
        const counts = modeObj(givingArray)
        expect(counts).toEqual({1:1,2:1,3:1})
    })

    it("testing modeObj--modeObj helper with string array",function(){
        const givingArray = ["h","e","l","l","o"]
        const counts = modeObj(givingArray)
        expect(counts).toEqual({h:1,e:1,l:2,o:1})
    })

    it("testing mode helper",function(){
        const givingObject = {h:1,e:1,l:2,o:1}
        const counts = mode(givingObject)
        expect(counts).toEqual("l")
    })
})
