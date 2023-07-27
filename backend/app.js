require('dotenv').config();
const express = require("express");
const createrouter = require("./routes/userRoutes");
// const loginRouter = require("../backend/routes/authRoutes");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path"); // Import the path module
const app = express();

app.use(express.json()); 

mongoose.connect(
    process.env.USERSDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {console.log("DB Successfully connected");})
.catch((err) => {console.log(err);})
 
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: true})); 

app.use("/", createrouter);

// Serve static files from the frontend build folder
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Route all GET requests to the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
}); 

app.listen(4020, () => console.log("Server listening on port 4020"));
