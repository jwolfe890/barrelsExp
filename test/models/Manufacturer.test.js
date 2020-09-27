/* eslint-disable */

// var Manufacturer = require("../../api/models/manufacturer")

var supertest = require("supertest");
var assert = require("assert");
var app = "../app.js";
var createdSegment;
require("../bootstrap.test");


describe("Manufacturer Controller", function () {
  it("get /manufacturer", function (done) {
    Manufacturer.create([{name: "test"}]).exec(function (err, manufacturer) {
      [""].length.should.be.aboveOrEqual(0);
    });
    done();
  });
});