const mongoose = require('mongoose')
//all of mongoose methods are asynchronous they return a promise

//Comment and uncomment the next following lines to switch database from local/remote
//const current_URI = process.env.LOCAL_URI ;
// const current_URI = process.env.LOCAL_URI ;
const current_URI1 = "mongodb://localhost:27017/tkyc" ;
const current_URI = "mongodb+srv://Sami19:Sami19@projectofsami.gnadd.mongodb.net/Sami19?retryWrites=true&w=majority" ;
const connectDB = async (r,err) => {
    try {
        const conn = await mongoose.connect(current_URI  ,
            { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB connected to => <=`)
        if(conn){
            console.log("mongodb");
        }
        
        
        //from colors dependency
    }catch (error){
        console.log("SARET ERREUR");
        console.log(error);
        process.exit(1)
    }
}
module.exports = connectDB
