const express = require('express'); //fetches the express package
const cors = require('cors'); //fetches the cors package
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express(); //app holds express

connectDB();
app.use(cors());
const PORT = process.env.PORT||3001;

app.get('/',(req,res) =>{
    res.send('Hello World! :)');
    //send back hello message
});

app.listen(PORT,() => console.log(`SERVER running on http://localhost:${PORT}`));