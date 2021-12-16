const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
	res.redirect('index3.html');
})

module.exports = router;