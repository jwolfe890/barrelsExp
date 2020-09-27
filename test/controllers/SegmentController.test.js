/* eslint-disable */
var supertest = require("supertest");
var assert = require("assert");
var app = "../app.js";
var createdSegment;
require("../bootstrap.test");

describe("Segment Controller", function () {
  it("get /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/segment")
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

  it("post /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        name: "Test1",
      },
    ];
    agent
      .post("/segment")
      .send(segment)
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

  it("update /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        name: "Test2",
      },
    ];
    agent
      .post("/segment/1")
      .send(segment)
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

  it("update /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        name: "Test2",
      },
    ];

    agent
      .put("/segment/1")
      .send(segment)
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

  it("update /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        sdfsdfdname: "Test2",
      },
    ];

    agent
      .put("/segment/1")
      .send(segment)
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
});
