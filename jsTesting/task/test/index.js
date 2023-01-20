const index = require("../index");

// mocha --> assert 
const assertMocha = require("assert")

// chai --> expect, assert, should 
const expect = require("chai").expect;
const assert = require("chai").assert;
const should = require("chai").should();

describe("test createArray function using chai", function(){
    it('some long setup', function(done) {
        setTimeout(done, 5000);
      })
})











describe("test capitalizeText function using chai", function(){

    it("test the datatype  case using assert",function(){
        assert.isString(index.capitalizeText("iti"))
    })

    it("test the happy case using expect",function(){
        expect(index.capitalizeText("iti")).to.be.equal("ITI")
    })

    it("test another case string not (iti) using should",function(){
        index.capitalizeText("hello").should.not.equal("ITI")
    })

    it("test another case not a string using expect",function(){
        expect(function(){
            index.capitalizeText(11)
        }).to.throw(TypeError, "parameter should be string")
    })
})


describe("test createArray function using chai", function(){
    before('some long setup', function(done) {
        this.timeout(2500);
        setTimeout(done, 2250);
      })
    before(function(){
        counter =1;
    })
    
    beforeEach(function(){
        counter+=1
    })

    it('should be complete in a 3 second', function(done) {
        setTimeout(done, 3000);
    })

    it("test the happy case using assert",function(){
        console.log(counter)
        assert.isArray(index.createArray(3))
    })

    it("test the length expect",function(){
        console.log(counter)
        expect(index.createArray(3)).that.includes(1).that.to.have.lengthOf(3)
    })
})