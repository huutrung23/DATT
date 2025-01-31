const express = require('express');
const productController = require('../../app/controllers/controller.product');
const router = express.Router();
const { uploadS3 } = require('../../middlewares/upload-aws-s3');

// GET
router.get('/list', productController.adminGetList);
router.get('/add', productController.adminGetAdd);

// POST
router.post(
  '/add',
  uploadS3.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'banner', maxCount: 1 },
    { name: 'product-image' },
  ]),
  productController.adminAddNew
);
router.post('/update/:id', productController.adminPutUpdate);

module.exports = router;
