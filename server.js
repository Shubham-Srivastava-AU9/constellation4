const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');
const path = require('path');


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

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
  }


const PORT= process.env.PORT|| 4000;
const server = app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));


