const db = require("./user/user.model");


exports.ajoutuserName = (req, res) => {

    const user = new user();
    user.username = req.params.username;

 
        user.findOne({ username: user.username }, (err, user) => {
            if (user) {
                   console.error(err);
            }
            else{

              
                user.save();
                res.json({ message: 'user added succesfully' });
            }

        });
      }



      exports.ajoutAdress = (req, res) => {

        const user = new user();
        user.username = req.params.username;
    
     
            user.findOne({ username: user.username }, (err, user) => {
                if (user) {
                       console.error(err);
                }
                else{
    
                  
                    user.save();
                    res.json({ message: 'user added succesfully' });
                }
    
            });
          }
  