const index = require("../index")
const assertMocha = require("assert")

const expect = require("chai").expect
const assert = require("chai").assert
const should = require("chai").should()


describe("description using mocha" , function(){
    it("test two possitive numbers " , function(){
        assertMocha.equal(index.sum(3,3) , 6)
    })

    it("test two negative numbers" , function(){
        assertMocha.equal(index.sum(-2,-2) , -4)
    })
})

describe("description using chai" , function(){
    it("test two possitive numbers using expect" , function(){
        expect(index.sum(3,3)).to.equal(6)
    })
    it("test two possitive numbers using assert chai" , function(){
        assert.equal(index.sum(2,2),4)
    })

    it("test two possitive numbers using should" , function(){
        index.sum(1,1).should.equal(2)
    })
})

describe("description using chai assert return array " , function(){
    it("return array using assert chai" , function(){
        assert.isArray(index.convertToArray(1,2,4,5))
    })

    it("same numbers using assert chai" , function(){
        assert.include(index.convertToArray(1,2,3,4),4)
    })

    it("length using assert chai" , function(){
        assert.lengthOf(index.convertToArray(1,2,5,5) , 4 )
    })
})
describe("description using chai expect return array " , function(){
    it("return array using expect chai" , function(){
        expect(index.convertToArray(1,2,4,5)).to.be.an("array")
    })

    it("same numbers using expect chai" , function(){
        expect(index.convertToArray(1,2,3,4)).includes(4)
    })

    it("length using expect chai" , function(){
        expect(index.convertToArray(1,2,3,4)).lengthOf(4)
    })

    
})
describe("description using chai expect return array " , function(){
    it("return array using should chai" , function(){
        index.convertToArray(1,2,3,4).should.be.an("array").that.includes(2).have.lengthOf(4)
    })
})
