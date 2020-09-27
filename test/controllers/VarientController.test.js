/* eslint-disable */

var supertest = require("supertest");
var assert = require("assert");
var app = "../app.js";
var createdSegment;
require("../bootstrap.test");

describe("Variant Controller", function () {
  it("get /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/variant")
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

  it("post /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        name: "Test1",
      },
    ];
    agent
      .post("/variant")
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

  it("update /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        name: "1223221REVETRQE  XE",
        type: "Diesel",
        capacity: "1497 cc",
        price: "6.99 Lakh",
      },
    ];
    agent
      .post("/variant/1")
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

  it("update /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        wefwefname: "REVETRQE  XE",
        typeffewfewe: "Diesel",
        capacity: "1497 cc",
        price: "6.99 Lakh",
      },
    ];

    agent
      .put("/variant/1")
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

  it("update /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        name: "REVETRQE  XE",
        type: "Diesel",
        capacity: "1497 cc",
        price: "6.99 Lakh",
      },
    ];

    agent
      .put("/variant/1")
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

  it("update /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        name: "REVETRQE  XE",
        type: "Diesel",
        capacity: "1497 cc",
        price: "6.99 Lakh",
      },
    ];

    agent
      .put('/variant/search?where={"capacity":{">="}:"2000"}}')
      .send(segment)
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          [].should.be.aboveOrEqual(0);
          done();
        }
      });
  });
});
