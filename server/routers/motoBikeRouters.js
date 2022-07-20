const express = require("express");
const {
  getAllMotobike,
  createMotobike,
} = require("../controller/motoBikeController");

const router = express.Router();

router.get("/", getAllMotobike);
router.post('/createmotobike', createMotobike )

module.exports = { motoBikeRouter: router };
