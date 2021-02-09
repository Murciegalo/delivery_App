const express = require('express');
const router = express.Router();
const QRCode = require('qrcode')
const models = require('../models');

let tracking = models.Tracking;
let product = models.Product;

// Create Product delivery
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

  QRCode.toDataURL(req.body.code).then(url => {
    QRCode.toFile(
      './assets/img/code.png',
      req.body.code
    )
    res.send(JSON.stringify(url))
  })
})


// Get product info for deliverman
router.post('/getProduct', async (req, res) => {
  let resp = await tracking.findOne({
    include: [{model: product}],
    where: {code: req.body.code}
  })
  // console.log(res);
  res.send(JSON.stringify(resp))
})


module.exports = router;