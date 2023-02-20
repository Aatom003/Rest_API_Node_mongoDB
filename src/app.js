const express = require("express");
const app = express();
const port = 3000;
const Player = require("./models/player");
// const { db } = require("./db/db"); // Importing the `db` object from db.js

// Connect to MongoDB using the `db` object
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://anindjha123:TKtQG4xZCVChfzjA@cluster0.yhctjtr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`MongoDB Connection Error: ${err.message}`));

const db = mongoose.connection;
// create new players
// const lebron = new Player({
//   name: "LeBron James",
//   team: "Los Angeles Lakers",
//   position: "Small Forward",
//   age: 37,
//   height: "6 9",
//   weight: 250,
//   stats: [25.5, 7.9, 7.9],
// });

// const mj = new Player({
//   name: "Michael Jordan",
//   team: "Chicago Bulls",
//   position: "Shooting Guard",
//   age: 58,
//   height: "6 6",
//   weight: 216,
//   stats: [30.1, 6.2, 5.3],
// });

// const kobe = new Player({
//   name: "Kobe Bryant",
//   team: "Los Angeles Lakers",
//   position: "Shooting Guard",
//   age: 41,
//   height: "6 6",
//   weight: 212,
//   stats: [25.0, 5.2, 4.7],
// });

// // save players to the database
// Promise.all([lebron.save(), mj.save(), kobe.save()])
//   .then(() => console.log("Players saved to database."))
//   .catch((err) => console.error(err));

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
const nbaRouter = require("./routes/players");
app.use("/", nbaRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
