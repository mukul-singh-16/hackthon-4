const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const landRoutes=require("./routes/landdetails")
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");
const cors = require("cors");
const { Server } = require("socket.io");

mongoose
  // .connect("mongodb://localhost:27017/farmers-friend")
  .connect("mongodb://127.0.0.1:27017/farmers-friend")
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(() => {
    console.log("DB FAILED");
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//session middleware
const sessionConfig = {
  secret: "farmersecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7 * 1,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 1,
  },
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.use(authRoutes);
app.use(landRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server Started At Port ${PORT}`);
});
