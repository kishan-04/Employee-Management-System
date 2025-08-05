const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/EMS_PROJECT")
.then(()=>{
    console.log("Database connected successfully.");
})
.catch((e)=>{
    console.log(e);
});