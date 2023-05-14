const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({

    select:Boolean,
    username: String,
    wallet: String,
    status: Array,
   
 

})

module.exports = mongoose.model('User' , UserSchema,'Users') ;
// module.exports = OrganisationModel;