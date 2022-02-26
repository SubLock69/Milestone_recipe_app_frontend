const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('../views/index');
});

router.put('/:id', (req,res) => {
  
});

module.exports = router;