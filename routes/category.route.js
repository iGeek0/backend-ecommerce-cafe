const { Router } = require('express');
const router = Router();
const {
    categoryGet,
    categoryPost,
    categoryPut,
    categoryDelete,
} = require('../controllers/category.controller');

router.get('/categories', categoryGet);

router.post('/categories', categoryPost);

router.put('/categories', categoryPut);

router.delete('/categories', categoryDelete);

module.exports = router;
