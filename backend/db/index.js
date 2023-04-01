const mongoose = require('mongoose');

require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true }).catch((error)=>{console.log(error)});

mongoose.connection.once('open', () => {
    console.log('atlas started')
})

const db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB Connection Error'));

module.exports = db;