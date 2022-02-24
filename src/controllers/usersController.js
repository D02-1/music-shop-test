const path = require('path');
const User = require('../Models/User');

const getUsers = (req, res) =>
{
     User.find({}, (err, users) =>
     {
         if(err)
         {
             return res.status(400).json({
                 success: "sdlfk",
                 message: err.message
             })
         }
        
        
             return res.status(200).json({
                 success: true,
                 data: users
             })
             
            })
   
}

const addUser = (req, res) =>
{
   const newUser = new User();

   newUser.username = 'username32';
   newUser.firstname = 'mimi';
   newUser.lastname = 'becker';
   newUser.birthday = { day: 12, month: 1, year: 1999 };
   newUser.adress = { street: "longstreet", postalcode: 20239, number: 1, city: "Phoenix"}
   newUser.save((err, user) =>
   {
       if(err) throw err;

       res.status(200).json(user);
       console.log(newUser);
   })
   
}

const getUserId = (req, res) =>
{
    const { id } = req.params;
    
    User.find({ _id : id}, (err, users) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: "sdlfk",
                message: err.message
            })
        }

            return res.status(200).json({
                success: true,
                data: users[0]
            })
    })
}

const edtiUserId = (req, res) =>
{
    
    const { id } = req.params;
    User.findOne({ _id: id}, (err, user) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

       
        user.brand = req.body.brand || user.brand;
        user.name = req.body.name || user.name;
        user.type = req.body.type || user.type;
        user.year = req.body.year || user.year;

       
        user.save((err, updatedUser) =>
        {
            if(err)
            {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }

            return res.status(200).json({
                success: true,
                
                newData: req.body,
                data: updatedUser
            });
        });
    });
}

const deleteUserId = (req, res) =>
{
    const { id } = req.params;
   
    User.deleteOne({ _id: id })
    .then(() =>
    {
        return res.status(200).json({
            success: true,
            message: 'Eintrag mit id' + id + 'wurde gelöscht'
        })
    })
    .catch(err =>
        {
            return res.status(400).json({
                success: false,
                message: err.message
            })
        })
}

module.exports = { getUsers, addUser, getUserId, edtiUserId, deleteUserId}