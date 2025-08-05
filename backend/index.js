const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());

const employeeRouter = require("./routers/employeeRouter");
app.use("/employee", employeeRouter);

app.listen( port, ()=>{
    console.log(`Your app is running on ${port}`);
});