const mongoose = require("mongoose")

const {DATABASE_URI} = process.env

// mongoose.set('strictQuery', true)
mongoose.connect(DATABASE_URI)

mongoose.connection
  .on("open", () => console.log("connnected to mongo db"))
  .on("close", () => console.log("disconnnected from mongo db"))
  .on("error", (error) => console.log(error));