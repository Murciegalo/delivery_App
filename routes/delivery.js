const express = require('express');
const router = express.Router();
const models = require('../models');

let tracking = models.tracking;
let product = models.product;

// Login User
router.post('/create', async (req, res) => {
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