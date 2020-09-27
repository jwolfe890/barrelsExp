/* eslint-disable */

var supertest = require("supertest");
var assert = require("assert");
var app = "../app.js";
var createdSegment;
require("../bootstrap.test");

describe("Manufacturer Controller", function () {
  it("get /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/manufacturer")
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

  it("post /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let manufacturer = [
      {
        name: "manufacturer1",
      },
    ];
    agent
      .post("/manufacturer")
      .send(manufacturer)
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

  it("update /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let manufacturer = [
      {
        name: "manufacturer2",
      },
    ];
    agent
      .post("/manufacturer/1")
      .send(manufacturer)
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

  it("update /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let manufacturer = [
      {
        name: "Test2",
      },
    ];

    agent
      .put("/manufacturer/1")
      .send(manufacturer)
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

  it("update /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        sdfsdfdname: "Test2",
      },
    ];

    agent
      .put("/manufacturer/1")
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
