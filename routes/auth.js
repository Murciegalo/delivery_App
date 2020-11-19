const express = require('express');
const router = express.Router();
const models = require('../models');
let user = models.User;

// Login User
router.post('/login', async (req, res) => {
  console.log(req.body);
  let loggedUser = await user.findOne({
    where:{
      email: req.body.email,
      password: req.body.password
    }
  })
  if(loggedUser !== null){
    console.log('REQ', loggedUser);
    return res.status(200).send(loggedUser)
  }
  return res.status(404).json({
    error: 'User not found, sorry',
    status: 'failed'
  })
})

module.exports = router;