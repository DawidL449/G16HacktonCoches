const { app } = require("./app");
const { db } = require("./utils/database");
require('./utils/firebase')

const PORT = process.env.PORT || 5000;

const { Categorie } = require("./models/categoriesModel");
const { Motobike } = require("./models/motoBikeModel");
const { Car } = require("./models/carsModel");

db.authenticate()
  .then(() => console.log("Successful connection to Databases"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));
//Listen the server

app.listen(PORT, () => {
  console.log(`Express app runing on port: ${PORT}`);
});
