const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../../models/User');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @router  GET /api/users/auth
// @description Get current user
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await (await User.findById(req.user.id)).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @router  POST /api/users/auth
// @description Login a user
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please enter email').not().isEmpty(),
    check('password', 'Please enter Password').not().isEmpty(),
  ],
  async (req, res) => {
    console.log(err + 'getting');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      /////////////////////////
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      //match user and password

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
