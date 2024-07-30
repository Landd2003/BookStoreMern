import express from "express"
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors"

const app=express();

//middleware for parsing request body
app.use(express.json());

//middleware to handle CORS POLICY OPT1
app.use(cors());
//middleware to handle CORS POLICY2
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         methods: ["GET","POST","PUT","DELETE"],
//         allowHeaders: ["Content-Type"],
//     })
// )

app.get("/", (req,res)=>{
    console.log(req);
    return res.status(234).send("welcome to MERN Stack");
});

app.use("/books" , booksRoute);

mongoose 
.connect(mongoDBURL)
.then(()=>{
console.log("App connected to database");
    app.listen(PORT , ()=>{
console.log(`App is listening to port ${PORT}`);
});
})
.catch((error)=>{
    console.log(error);
});