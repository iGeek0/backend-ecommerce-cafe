const { Router } = require('express');
const router = Router();
const {
    productGet,
    productPost,
    productPut,
    productDelete,
} = require('../controllers/product.controller');

router.get('/products', productGet);

router.post('/products', productPost);

router.put('/products', productPut);

router.delete('/products', productDelete);

module.exports = router;
