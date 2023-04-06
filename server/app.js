//Import express library
const express = require("express");
const cors = require("cors");
const { categoriesRouter } = require("./routers/categoriesRoutes");
const { carsRouter } = require("./routers/carsRoutes");
const { motoBikeRouter } = require("./routers/motoBikeRouters");
const { adsRouter } = require("./routers/adsRoutes");

const app = express();

app.use(express.json());
app.use(cors());

console.log("Esto es otro test");

app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/cars", carsRouter);
app.use("/api/v1/motobike", motoBikeRouter);
app.use("/api/v1/ads", adsRouter);

module.exports = { app };
