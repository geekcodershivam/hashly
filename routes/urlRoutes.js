const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Urls = mongoose.model('Url');
const requireLogin = require('../middleware/requireLogin');

router.post('/createurl', requireLogin, (req, res) => {
  let currentTime=Date.now();
  const { original, short } = req.body;
  if (!original || !short) {
    return res.status(422).json({
      error: 'Please add all the fields',
    });
  }

  Urls.findOne({ slug: short })
    .then((saveUrl) => {
      if (saveUrl) {
        return res.status(422).json({
          error: 'Try Different Short Url, This exists !',
        });
      }
      req.user.password = undefined;
      const urls = new Urls({
        originalUrl: original,
        slug: short,
        owned: req.user,
        createAt:currentTime,
      });
      urls
        .save()
        .then((result) => {
          res.json({
            // message: 'Successsfuly Created',
            urls: result,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/urls',requireLogin,(req, res) => {
  Urls.find({owned:req.user._id})
    .populate('owned', '_id email name')
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:slug?', async (req, res) => {
  if (req.params.slug != undefined) {
    var data = await Urls.findOne({ slug: req.params.slug });
    if (data) {
      data.visits = data.visits + 1;
      var ref = req.query.ref;
      if (ref) {
        switch (ref) {
          case 'fb':
            data.visitsFB = data.visitsFB + 1;
            break;
          case 'ig':
            data.visitsIG = data.visitsIG + 1;
            break;
          case 'yt':
            data.visitsYT = data.visitsYT + 1;
            break;
        }
      }
      await data.save();
      // res.redirect(data.originalUrl)
      res.json({url:data.originalUrl});
    } else {
      return res.status(422).json({
        error: 'Slug is not found !',
      });
    }
  } else {
    return res.status(422).json({
      error: 'chal Slug is not found !',
    });
  }
});

module.exports = router;
