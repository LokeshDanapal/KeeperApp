const express = require('express');

const cors = require('cors')

const db = require('./db')

const bodyParser = require('body-parser');

const app = express();

const userPortal = require('./routes/userRoute');

const keeperSide = require("./routes/keeperRoute");

// const keepNotes = require('./routes/keeperRoute');

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(cors());

db.on('error',console.error.bind(console,'MongoDB connection error'))

app.get("/getData",(req,res) => {
   res.json({"status" : "ok"});
})

app.use('/api',userPortal);

app.use('/api1',keeperSide);

app.listen(5000,() => console.log("App is Runing on port 5000"));