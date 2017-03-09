const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    birthDate: req.body.birthDate,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    agreement: req.body.agreement
  });
  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, nsg: 'Failed to register user'});
    } else {
      res.json({success: true, nsg: 'User registered'});
    }
  })
});

//authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 3600
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            lastname: user.lastname,
            birthDate: user.birthDate,
            username: user.username,
            email: user.email
          }
        }) ;
      } else {
          return res.json({success: false, msg: 'Wrong password'});
      };
    });
  })
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;