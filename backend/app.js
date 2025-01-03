require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require("./routes/messageRoutes");
const groupRoutes = require("./routes/groupRoutes");
const path = require('path');
const cors = require('cors');


const app = express();

app.use(cors({
    origin:"*"
}));

app.use(express.json());


app.use("/api",userRoutes);

app.use("/api",messageRoutes);
app.use("/api",groupRoutes);

app.use(express.static(path.join(__dirname,"../frontend/public")));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend/public/index.html"));
});

app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend/public/login.html"));
});

app.listen(process.env.MYSQL_PORT,() => {
    console.log(`Server is running on port ${process.env.MYSQL_PORT}`);
});