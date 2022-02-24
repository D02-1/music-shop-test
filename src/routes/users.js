const express = require('express');
const router = express.Router();
//const path = require('path')
const { getUsers, addUser, getUserId, edtiUserId, deleteUserId } = require('../controllers/usersController') 

// router.route("/")
// .get(getUsers)
// .post(addUser)

router.get("/", (req, res) =>
{
    console.log("ewrj")
})


//router.route("/:id")
// .get(getUserId)
// .put(edtiUserId)
// .delete(deleteUserId)



module.exports = router;