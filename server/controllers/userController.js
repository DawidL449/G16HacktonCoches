const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const { User } = require('../models/userModel');
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  res.status(200).json({
    users,
  });
});

const getUserById = catchAsync(async (req, res, next) => {
  const { user } = req;

  res.status(200).json({ user });
});

const createUsers = catchAsync(async (req, res, next) => {
  const { name, email, password, role, status } = req.body;

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    role,
    status,
  });

  //Remove password from response

  newUser.password = undefined;

  res.status(200).json({ newUser });
});

const updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { name } = req.body;

    await user.update({ name });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    await user.update({ status: 'disabled' });

    res.status(200).json({
      status: 'sucess',
    });
  } catch (error) {
    console.log(error);
  }
};

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //Validate that user exists with given email

  const user = await User.findOne({ where: { email, status: 'active' } });

  //Compare password with db

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Credentials invalid', 400));
  }

  //Generate JWT

  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  user.password = undefined;

  res.status(200).json({ token, user });
});

module.exports = {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
};
