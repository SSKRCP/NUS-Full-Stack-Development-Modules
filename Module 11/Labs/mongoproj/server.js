const express = require('express');
const dotenv = require('dotenv');

//*** Load env vars */
dotenv.config({path:'./config/config.env'});

//*** Initialise with express() */
const app = express();

//*** route using express */
app.get('/',(req,res)=>{
    res.send('<h1>Hello from express!</h1>');
});

// Connect to DB
const connectDB = require('./config/db');
connectDB();

//*** Configure port */
const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log('Server is running in ' + process.env.MODE_ENV + ' mode on port ' + PORT)
);