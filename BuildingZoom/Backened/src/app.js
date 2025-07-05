import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
// import cors from "cors";

const app = express();
const port = 8000;
app.get("/home", (req, res) => {
    res.send("Hello World!");
    console.log("Home page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});