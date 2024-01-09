const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();

const app = express();

app.use(cors({
    origin: ["https://mern-stack-gp2j.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
}));


app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })



app.get('/', (re,res)=>{

    return res.json("From the BackEnd side works fine Maybe!!")
});


app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));