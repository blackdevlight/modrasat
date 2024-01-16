const router = require('express').Router();
const pagesController = require('../controllers/pagesControllers');

router.get('/', pagesController.getHomepage);
router.get('/home', pagesController.getHomepage);
router.get('/about-us', pagesController.getAboutpage);
router.get('/courses', pagesController.getCoursespage);
router.get('/classmode', pagesController.getClassmode);
router.get('/contact', pagesController.getContactpage);
router.get('/enroll', pagesController.getEnrollpage);
module.exports = router;


