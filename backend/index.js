//import express

const express = require("express");
const userRouter = require("./routers/userRouter");
const orderRouter = require("./routers/orderRouter");
// const productRouter = require('./routers/productRouter');
// const utilRouter = require('./routers/util');

const cors = require("cors");

//initialize express

const app = express();
const port = 5000;

//middleware
//parse json data
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/user", userRouter);
app.use("/order", orderRouter);
// app.use('/util', utilRouter);

app.get("/", (req, res) => {
  res.send("response from express");
});

app.get("/add", (req, res) => {
  res.send("response from add");
});

app.get("/getall", (req, res) => {
  res.send("resposne from getall");
});

app.get("/update", (req, res) => {
  res.send("resposne from update");
});

//starting the server
app.listen(port, () => {
  console.log("express server started");
});
