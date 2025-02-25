import express from "express";
import dotenv from "dotenv"
import connect from "./db/connect.js"
import auth from "./routes/auth.js";
import message from "./routes/message.js"
import cookieParser from "cookie-parser";
import user from "./routes/user.js";


//config
dotenv.config();
const PORT = process.env.PORT
const app = express()


//middleware
app.use(express.json()); 
app.use(cookieParser());

//routes
app.use("/api/auth",auth);
app.use("/api/messages",message);
app.use("/api/users",user)


//server
app.listen(PORT,()=> {
    connect();
    console.log(`server is running at ${PORT}`);
    
})