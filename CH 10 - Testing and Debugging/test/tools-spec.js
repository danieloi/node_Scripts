//from 'Testing with mocha and Chai' & 'Asynchronous mocha testing' & 'Mocking a server with Nock' video
//mocha looks for a 'test' folder

//TDD involves writing the test first, 
//running it, 
//watching it fail
//writing code to make it pass 

//Mocha gives us a suite for describing, running and building tests but doesn't give us a way to check values..
//for checking values, we use Chai!

var expect = require('chai').expect;
var nock = require('nock'); //for mocking serverss
var tools = require('../lib/tools'); //where the functions we're testing live
//we're using the expect function of the Chai Assertion engine
//Chai also has the ability to use the 'Should'  and 'Assert' Assertion Engine as opposed to the 'Expect' Function


describe('Tools', () => {
    //this is the function we use to set up a suite of tests
    describe('printName()', () => { //we write our tests in this callback function
        it('should print the last name first', () =>{
            var results = tools.printName({ first: 'Mayowa', last: 'Daniel'});
            expect(results).to.equal('Daniel, Mayowa');
        });
    }); 




    //         //demonstrates aynchronous testing with mocha
    // describe('loadWiki', () => {
    //             it(`load Abraham Lincoln's wikipedia page`, (done) => { //without the argument in the callback function, mocha won't wait for the 
    //             //async function we're testing to run and since our 'expect' is nested in the callback function (which only gets called after the html finishes 
    //             //loading) of the function we're testing, it will not run any tests and so no passed or failed assertions would be 
    //             //passed. The test would default to being passed
    //                 tools.loadWiki({ first :'Abraham', last : 'Lincoln' }, (html) => {
    //                     expect(html).to.be.ok;//chacks if the html exists
    //                     done(); //let's mocha know the test was passed
    //                 });
    //             }).timeout(10000); //increase the timeout duration from the default 2ms

    //demonstrates mocking a server with nock
    //mocking the server saves loading if we were actually requesting from a real server
    //it helps us to maintain our focus on 
    describe('loadWiki', () => {

        before(() => { //mocha hooks! These 
            //help us run the whole test suite or after the whole test suite or before each test in the test suite or
            //after each test in the test suite or after the whole test suite
            nock('https://en.wikipedia.org').get('/wiki/Abraham_Lincoln').reply(200, 'Mock Abraham Lincoln');
            //the arguments of the get request are actually going to be passed to the mock version of the domain we used (in this case...
            //wikipedia) 
        });

        it(`load Abraham Lincoln's wikipedia page`, (done) => { //without the argument in the callback function, mocha won't wait for the 
        //async function we're testing to run and since our 'expect' is nested in the callback function (which only gets called after the html finishes 
        //loading) of the function we're testing, it will not run any tests and so no passed or failed assertions would be 
        //passed. The test would default to being passed
            tools.loadWiki({ first :'Abraham', last : 'Lincoln' }, (html) => {
                expect(html).to.equal('Mock Abraham Lincoln');//chacks if the html exists
                done(); //let's mocha know the test was passed
            });
        }); //increase the timeout duration from the default 2ms
        
    })
});

