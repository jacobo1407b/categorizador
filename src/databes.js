const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://j1407b:adrenalinas123@cluster0.x0glq.mongodb.net/test?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })

  .then((db) => console.log("data base mode development is connect"))
  .catch((err) => console.error(err));
