const express = require('express');
const router = express.Router();
const models = require('../models');

let tracking = models.Tracking;
let product = models.Product;

// Login User
router.post('/create', async (req, res) => {
  console.log('Back', req.body);
  const delivery = await tracking.create({
    userId: req.body.userId ,
    code: req.body.code ,
    local: req.body.local
  })
  let trackingId = delivery.id

  await product.create({
    trackingId,
    name: req.body.product
  })
})


module.exports = router;