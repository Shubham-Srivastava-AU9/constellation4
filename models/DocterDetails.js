const mongoose = require('mongoose');
const DocterDetailsScheema = new mongoose.Schema({
    practicename : {
        type : String,
    },
    practicetype : {
        type : String,

    },
    first_name : {
        type : String
    },
    last_name : {

    },
    professional_desighnation : {
        type:String
    },
    address1 :{
        type : String
    },
    address2 :{
        type: String
    },
    city:{
        type :String
    },
    state :{
        type:String
    },
    zip :{
        type : String
    },
    phone :{
        type : String
    },
    fax :{
        type : String
    },
    gender :{
        type : String,
        
    }


});

module.exports = mongoose.model("DocterDetails", DocterDetailsScheema);
