const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserDetails = new Schema(
    {
        username : {type:String},
        email : {type:String},
        password : {type:String}
    }
    //,{timestamps:true}
);

module.exports = mongoose.model('UserDetails',UserDetails);

// unique:true,sparse:true,index:true,require: true