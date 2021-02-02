const express = require('express');
const router = express.Router();
const models = require('../models');
let user = models.User;

// Login User
router.post('/login', async (req, res) => {
  let loggedUser = await user.findOne({
    where:{
      email: req.body.email,
      password: req.body.password
    }
  })
  if(loggedUser === null){
    return res.send(JSON.stringify('error'))
  }
  return res.send(loggedUser)
})


// Verify Password from User Modifying
router.post('/verifyPass', async (req, res) => {
  let loggedUser = await user.findOne({
    where:{
      id: req.body.id,
      password: req.body.oldPass
    }
  })
  if(loggedUser === null){
    res.send(JSON.stringify(`Sorry, your old password don't match`))
  }
  else{
    if(req.body.newPass === req.body.confirmNewPass){
      loggedUser.password = req.body.newPass //bcrypt to be added
      loggedUser.save()
      res.send(JSON.stringify('Password updated'))
    }
    else{
      res.send(JSON.stringify(`Sorry, your new password differs from the confirmed one`))
    }  
  }
})

module.exports = router;