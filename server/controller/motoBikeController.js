const { Motobike } = require("../models/motoBikeModel");

const getAllMotobike = async (req, res) => {
  const motobikes = await Motobike.findAll();
  console.log(motobikes);

  res.status(200).json({ motobikes });
};

const createMotobike = async (req, res) => {
  const { brand, model, color, price } = req.body;
  console.log(brand, model, color, price);

  const addMotobike = await Motobike.create({ brand, model, color, price });

  res.status(200).json({ addMotobike });
};

module.exports = { getAllMotobike, createMotobike };
