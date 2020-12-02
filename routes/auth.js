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

module.exports = router;