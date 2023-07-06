require('dotenv').config();
const express = require("express")
const createrouter = require("./routes/userRoutes")
// const loginRouter = require("../backend/routes/authRoutes")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const app = express()

app.use(express.json()); 

mongoose.connect(
    process.env.USERSDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {console.log("DB Successfully connected")})
.catch((err) => {console.log(err)})
 


app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended: true})); 
app.use("/", createrouter)



app.listen(4000, () => console.log("Server listening on port 4000"))