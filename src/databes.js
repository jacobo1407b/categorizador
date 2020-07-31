const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/pariente", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })

  .then((db) => console.log("data base mode development is connect"))
  .catch((err) => console.error(err));
