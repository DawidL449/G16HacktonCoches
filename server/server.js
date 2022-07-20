const { app } = require("./app");

const { db } = require("./utils/database");

// Models
const { initModel } = require("./models/initModels");

//Conection to databases

db.authenticate()
  .then(() => console.log("Successful connection to Databases"))
  .catch((err) => console.log(err));

// Establish models relations

initModel();

db.sync()
  .then(() => console.log('Database synced'))
  .catch( err => console.log(err))   

  
//Create PORT
const PORT = process.env.PORT || 2001;

//Listen the server
app.listen(PORT, () => {
  console.log(`Express app runing on port: ${PORT}`);
});



