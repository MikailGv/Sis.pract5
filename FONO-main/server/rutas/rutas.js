const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
	res.redirect('apertura.html');
})

module.exports = router;