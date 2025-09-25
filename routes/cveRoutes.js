const express = require('express');
const router = express.Router();
const cveController = require('../controllers/cveController');

router.get('/', cveController.getAllCVEs);
router.post('/add', cveController.createCVE);
router.get('/edit/:id', cveController.editPage);
router.post('/update/:id', cveController.updateCVE);
router.post('/delete/:id', cveController.deleteCVE);

module.exports = router;