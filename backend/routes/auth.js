const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

router.get("/", (req, res) => {
  res.status(200).send({ msg: "hello from auth routes" });
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email });
  const newUser = await User.register(user, password);
  console.log(newUser);
  res.send({ msg: "registered successfully" });
});

router.post("/login",passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: false,
  }),
  (req, res) => {
    console.log("logged In Successfully");
    res.send({ msg: "logged in successfully" });
  }
);

router.get("/login/sucess",(req,res)=>{
  if(req.user)
    res.status(200).json({"msg" :"user is loggedin", "user":req.user})
  else
    res.status(401).json({"msg" :"user is not loggedin"})

})

module.exports = router;
