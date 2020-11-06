const express = require('express');
const router = express.Router();
const models = require('../models');
let user = models.User;

// New User
router.get('/create', async (req, res) => {
  const {name, password, email } = req.body
  const newUser = await user.create({
    name: 'Joao',
    password: '12312312', 
    email: 'escandalo@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  return res.json({
    status: 'success',
    newUser
  }); 
})

// Read Users
router.get('/read', async (req, res) => {
  const users = await user.findAll({ raw:true })
  return res.json({
    status: 'success',
    users
  }); 
})

// Update Users
router.get('/update', async (req, res) => {
  const userUpd = await user.findByPk( 1, {include:[{all:true}]}).then(
    res => {
      res.name = 'TitossssUpdated'
      res.save()
    }
  )
  return res.json({
    status: 'success',
    userUpd
  }); 
})


// Delete Users
router.get('/delete', async (req, res) => {
  await user.findAll()
  return res.status(200).json({ status: 'success'}); 
})




module.exports = router;