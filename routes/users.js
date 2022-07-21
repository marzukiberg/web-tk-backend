var express = require('express');
const User = require('../model/user');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const data = await User.find({});
  res.send(data);
});

router.post('/', async (req, res) => {
  const payload = req.body;
  const isExist = await User.exists({ username: payload.username });

  if (isExist) {
    res.status(409);
    res.json('data exist');
  } else {
    const response = await User.create(payload);
    res.json(response);
  }
});

module.exports = router;
