
const controller = require("./user.controller");
const db = require("./user/");
const user = db.user;




module.exports = function(app) {
app.post("/api/twitter/:username",(req, res) => {
    console.log("fdslqkfjlkdj");
    console.log();
    const user1 = new user({
        select:false,
        username : "",
        wallet:"",
        status:[]
    });
    user1.username = req.params.username;

 
        user.findOne({ username: user1.username }).then((user)=>{
            if (user) {

                   console.error(err);
            }
            else{

              console.log(user1);
                user1.save();
                res.json({ message: 'user added succesfully' });
            }

        });
  
  
  
  }


)
app.post("aaa/:wallet",(req, res) => {
    console.log("wallet");
    // console.log();
    const user1 = new user({
        select:false,
        username : "",
        wallet:"",
        status:[]
    });
    user1.wallet = req.params.wallet;

 
        user.findOne({ wallet: user1.wallet }).then((user)=>{
            if (user) {

                   console.error(err);
            }
            else{

              console.log(user1);
                user1.save();
                res.json({ message: 'user added succesfully' });
            }

        });
  
  
  
  }


)

app.delete("/api/user/delete/:username",(req, res) => {
user.findOneAndDelete({username: req.params.username}).then(
    (err, result) => {
      if(result){
      console.log('got deleted');
      res.send("got deleted successfully")
      }else{

        res.send(err)
      }
    
    })})





 app.get("/api/user/all",(req, res) => {
    user.find({}).then((err, result)=>{
        if(err){
        res.json(err);
        }
        else{
            console.log(result);
        res.json(result)
        }
            });
  })
// app.get("/api/organization/allForUser/:id",controller.allForUser);
// app.get("/api/organization/:id",controller.getOrgByid);
// app.post("/api/organization/follow/:id/:idUser",controller.followOrganization);
// app.post("/api/organization/isFollowed/:id/:idUser",controller.isFollowed);
// app.post("/api/organization/addProjectToOrganization/:idOrganization/:idProject",controller.addProjectToOrganization);
// app.post("/api/organization/unfollow/:id/:idUser",controller.unfollowOrganization);
// app.delete("/api/organization/delete/:id",controller.deleteOrganization);
// app.get("/api/organization/getOrgowner/all",controller.allOrganisationOwners);

// app.delete("/api/organization/getUser/:username",controller.getUser);
// app.put("/api/organization/update",controller.getOrganizationByUser);
};