const request = require("supertest");
const express = require("express");
const { app } = require("../app");
//const carsRoutes = require("../../routers/carsRoutes.js")
const { carsRouter } = require("../routers/carsRoutes.js");

//const app = express();
//const app = express();
//app.use(express.json())
app.use("carsRouter");

describe("/api/v1/cars", () =>
  test('should return status 200 & content-type "application/json"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");
  }));
