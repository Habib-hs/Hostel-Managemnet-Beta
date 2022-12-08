const env = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");

const app= require('./app');


// environment variable/constant
env.config({ path: "config.env" });
//mongodb conection
mongoose
  .connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.mdsp6wl.mongodb.net/Hostel?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      //useCreateIndex: true
    }
  )
  .then((con) => {
    console.log("DB connection successful ");
  });

const PORT = process.env.PORT || 8000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


// const express = require("express");
// const env = require("dotenv");
// const app = express();
// const path = require("path");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const authRouter = require("./routes/authRouter.js");
// const roomsRouter = require("./routes/roomsRouter.js");
// const hotelsRouter = require("./routes/hotelsRouter.js");
// const usersRouter = require("./routes/usersRouter.js");

// //routes
// const userRoutes = require("./routes/usersRouter");
// // environment variable/constant
// env.config({ path: "config.env" });
// //mongodb conection

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.mdsp6wl.mongodb.net/Hostel?retryWrites=true&w=majority`,
//     {
//       useNewUrlParser: true,
//       //useCreateIndex: true
//     }
//   )
//   .then((con) => {
//     console.log("DB connection successful ");
//   });

// const PORT = process.env.PORT || 8000;

// app.use(express.json()); //I can use app.use(express.json()) instead. Bothwe use as a middleware that introduces
// // incoming request as a json Object.

// app.use("/api/auth", authRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/rooms", roomsRouter);
// app.use("/api/hotels", hotelsRouter);

// //Error Middleware
// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

