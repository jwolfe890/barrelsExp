/* eslint-disable */

var supertest = require("supertest");
var assert = require("assert");
var createdSegment;
require("../bootstrap.test");

describe("Car Controller", function () {
  it("get /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/car")
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

  it("post /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);

    let car = {
      name: "Tata Nexon",
      segment: 1,
      description: "This is a dummy text",
      manufacturer: 1,
      variants: [1],
      accessories: [1],
    }

    agent
      .post("/car")
      .send(car)
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          [].length.should.be.aboveOrEqual(0);
          done();
        }
      });


      it("post /car", function (done) {
        var agent = supertest.agent(sails.hooks.http.app);
    
        let car = {
          name: "Tata Nexon",
          segment: 1,
          description: "This is a dummy text",
          manufacturer: 1,
          variants: [1],
          accessories: [1],
        }
    
        agent
          .put("/car/1")
          .send()
          .expect(400)
          .end(function (err, result) {
            if (err) {
              done(err);
            } else {
              [].length.should.be.aboveOrEqual(0);
              done();
            }
          });

        })
      })
      it("post /car", function (done) {
        var agent = supertest.agent(sails.hooks.http.app);
    
        let car = {
          name: "Tata Nexon",
          segment: 1,
          description: "This is a dummy text",
          manufacturer: 1,
          variants: [1],
          accessories: [1],
        }
    
        agent
          .get("/car/1")
          .send()
          .expect(404)
          .end(function (err, result) {
            if (err) {
              done(err);
            } else {
              [].length.should.be.aboveOrEqual(0);
              done();
            }
          });

        })


        it("post /car", function (done) {
          var agent = supertest.agent(sails.hooks.http.app);
      
          let car = {
            name: "Tata Nexon",
            segment: 1,
            description: "This is a dummy text",
            manufacturer: 1,
            variants: [1],
            accessories: [1],
          }
      
          agent
            .delete("/car/1")
            .send()
            .expect(404)
            .end(function (err, result) {
              if (err) {
                done(err);
              } else {
                [].length.should.be.aboveOrEqual(0);
                done();
              }
            });
  
          })
    
});