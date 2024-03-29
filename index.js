const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const { connect } = require("./config/db");
dotenv.config();
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
// const chatRoutes = require("./routes/chatRoutes");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

connect();

app.use("/api", userRoutes);
// app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => res.send("api working fine"));

app.listen(PORT, console.log("server started at port 5000"));
