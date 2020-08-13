
const express = require('express')
const router = express.Router();
const controller = require('../controllers/controllers')


router.get('/',controller.homepage)


router.all('/add-blog',controller.addBlog)

router.all('/update-blog/:id',controller.updateBlog)


router.get('/delete-blog/:id',controller.deletePost)


module.exports = router