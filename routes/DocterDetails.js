const router = require('express').Router();
const docterDetails = require('../controllers/docterDetails');


router.route('/details')
.post(docterDetails.createDoctersDetails)
.get(docterDetails.getDetails)


router.route("/:id")
.get(docterDetails.getDetail)



module.exports = router