const mongoose = require("mongoose");
const { port, mongoUri } = require("./src/config/config");
const { app } = require("./app");

mongoose.connect(mongoUri);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.on("connected", () => {
  console.log("Database Connected");
});

app.listen(port, () => {
  console.log(`Server is listening to the port ${port}`);
});
