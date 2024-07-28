// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const dotenv = require("dotenv");
// dotenv.config();
const app = express();
const Database = require("./config/db")
app.use(bodyParser.json());
app.use(cors());
const data = require("./models/data");

Database();
data();


const flight  = require("./routes/flights");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.send("Server is Runing fine")
})

app.use("/flight",flight);

const port = 8000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});