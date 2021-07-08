const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');

//connect Db 

connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));



// app.use("/",(req,res)=>{
//     res.send("hiyamee")
// })


app.use('/api', require('./routes/DocterDetails'))


const PORT= process.env.PORT|| 4000;
const server = app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));


