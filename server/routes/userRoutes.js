const express = require("express");
const {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/userController");
const { userExists, protectToken, protectDeleteUser} = require("../middlewares/usersMiddlewares");
const router = express.Router();



router.post("/", createUsers)

router.post('/login', login)

router.use(protectToken)

router.get("/", getAllUsers);

router.route("/:id")
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, protectDeleteUser, deleteUser);

module.exports = { userRoutes: router };
