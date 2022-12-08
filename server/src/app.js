const express = require("express");
const cors= require('cors');
const app = express();
//const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//routes
const authRouter = require("./routes/authRouter.js");
const roomsRouter = require("./routes/roomsRouter.js");
const hotelsRouter = require("./routes/hotelsRouter.js");
const usersRouter = require("./routes/usersRouter.js");

//middlewares
app.use(cors({
  origin:"http://localhost:3000"
}))
app.use(express.json()); //I can use app.use(express.json()) instead. Bothwe use as a middleware that introduces
// incoming request as a json Object.

app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/hotels", hotelsRouter);

//Error Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

module.exports = app;