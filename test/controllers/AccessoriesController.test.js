/* eslint-disable */
var supertest = require("supertest");
var assert = require("assert");
var app = "../app.js";
var createdSegment;
require("../bootstrap.test");

describe("Accessories Controller", function () {
  it("get /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/accessories")
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

  it("post /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let segment = [
      {
        name: "Test1",
      },
    ];
    agent
      .post("/accessories")
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

  it("update /accessories", function (done) {
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
      .post("/accessories/1")
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

  it("update /accessories", function (done) {
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
      .put("/accessories/1")
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

  it("update /accessories", function (done) {
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
      .put("/accessories/1")
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
      .put("/accessories/search?sort=price ASC")
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
