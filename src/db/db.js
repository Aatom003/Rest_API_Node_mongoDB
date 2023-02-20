const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://anindjha123:TKtQG4xZCVChfzjA@cluster0.yhctjtr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`MongoDB Connection Error: ${err.message}`));

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

module.exports = { mongoose };
