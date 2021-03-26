const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogsController')

router.get('/blogs', blogsController.getBlogs)


router.get('/blogs/blog1', blogsController.getBlog1)
router.get('/blogs/blog2', blogsController.getBlog2)
router.get('/blogs/blog3', blogsController.getBlog3)
router.get('/blogs/blog4', blogsController.getBlog4)
router.get('/blogs/blog5', blogsController.getBlog5)
router.get('/blogs/blog6', blogsController.getBlog6)

module.exports = router