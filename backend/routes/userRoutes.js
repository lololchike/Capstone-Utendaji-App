const router = require("express").Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const validator = require("validator")
const jwt = require("jsonwebtoken")
let employeeNumber

const generateToken = (_id) => {
 return jwt.sign({_id}, process.env.JWTPRIVATEKEY, {expiresIn: "3d"})
  }
  
// login
router.post("/api/login", async (req, res)=>{
  const {userName, password} = req.body
  try{
    if (!userName || !password){
      throw Error("All fields must be filled")
    }
    const user = await User.findOne({userName})
    if (!user){
      throw Error("No such user exists")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match){
      throw Error("Wrong password entered")
    }
    const token = generateToken(user._id)
res.status(200).json({user, token})

  }
  catch(err){
    res.status(400).json({error: err.message})
  }
}
)

// signup
router.post("/api/createuser/", async (req, res)=>{
const {  firstName, middleName, lastName,userName, password,  email, role, station, team, dateHired, hiredBy} = req.body

try{
  if (!userName || !password){
    throw Error("All fields must be filled")
  } 
  if (!validator.isEmail(email)){
    throw Error("Please enter a valid email")
  }
  const emailexists = await User.findOne({email})
  if(emailexists){
      throw Error("Email already registered")
  }
  if (!validator.isStrongPassword(password)){
  throw Error("That password is too weak")
  }
  const usernameexists = await User.findOne({userName})
  if(usernameexists){
      throw Error("That username is already taken")
  }

// generate employee number 
const lastUser = await User.findOne().sort({ _id: -1 });
console.log(lastUser)
if(lastUser.employeeNumber){
  employeeNumber = (parseInt(lastUser.employeeNumber.slice(2)) + 1).toString()
  employeeNumber = `EK${employeeNumber.padStart(4, "0")}`;
} 
else{
  employeeNumber = "0001"
}

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
const user = await User.create({firstName, middleName, lastName, email, role, station, team, dateHired, userName, password:hashedPassword, hiredBy, employeeNumber}) 

// const token = generateToken(user._id)

res.status(200).json({user})
}
catch(error){
res.status(400).json({error: error.message})
}
})

router.post('/api/getmanagerteam', async (req, res) => {
  const {team} = req.body
  try {
    const users = await User.find({ team });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching users' });
  }
});




module.exports = router;





