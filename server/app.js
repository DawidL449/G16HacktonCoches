//Import express library
const express = require("express");
const cors = require("cors");
const { categoriesRouter } = require("./routers/categoriesRoutes");
const { motoBikeRouter } = require("./routers/motoBikeRouters");

const app = express();

app.use(express.json());

app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/motobike", motoBikeRouter);

module.exports = { app };
