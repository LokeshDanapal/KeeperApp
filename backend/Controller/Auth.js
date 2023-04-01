const bcrypt = require("bcryptjs");

const User = require("../models/UserDetails");

const alert = require("alert");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const JWT_SECRET = process.env.JWT_TOKEN;

createUser = async function (req, res) {

  const {username, email, password} = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const NewUser = new User({username,email,password: encryptedPassword}) 

  console.log(NewUser)

  try {
  const oldUser = await User.findOne({email});
  if (oldUser){
    alert("User Exists");
    return res.json({error : "User Exists"});
  }
  NewUser.save().then(() => console.log("Data saved")).catch((error) => {console.log(error)});
  
  jwt.sign({username},JWT_SECRET,{expiresIn : '7 days'},(err,token)=>{
    if(err) throw err;
    return res.json({status:"ok" , AccessToken : token});
  })
  } catch (error) {
    console.log(error);
  }
};

validateUser = async function (req, res) {
  const { username, password } = req.body;
  console.log("Inside ValidateUser")
  const user = await User.findOne({username});
  console.log(user);
  //const username = user.UserName;
  if (!user) {
    alert("User not found please sign up");
    return res.json({error : "User not found please sign up"});
  }
  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);
  if (!isMatch) {
    alert("Password Incorrect");
    return res.status(400).json({ msg: " Password incorrect" });
  }
  alert("Login successful");
  res.json({status : "ok" , msg : user})
  // jwt.sign(
  //   {username},
  //   JWT_SECRET,
  //   { expiresIn: "30 days" },
  //   (err, token) => {
  //     if (err) throw err;
  //     res.json({status : "ok" , AccessToken : token });
  //   }
  // );
};

module.exports = {createUser,validateUser}
