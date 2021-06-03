const express = require('express');
const Post =  require('../models/post');
const router = express.Router();
const https = require('https')
const request = require('request')



router.get('/:settings', async(req, res, next ) => {
  let obj = JSON.parse(req.params.settings);
  const factsAmount = obj.amount;
  const showOnlyUserFacts = obj.onlyUserFacts;
  const page = obj.page;
  let facts = [];
  let serverFacts = await Post.find();
  serverFacts.forEach(fact => {
    facts.push(fact)
  })

  request(`https://dog-api.kinduff.com/api/facts?number=${showOnlyUserFacts? 1 : 30}`, { json: true },async (err, response, body) => {
    if (err) { return console.log(err); }
    if (!showOnlyUserFacts) {
      body.facts.forEach(f => {
        facts.push({fact: f, addedBy: 'API'});
      })
    }
    if (page || page === 0) {
      let minAmount = page * factsAmount;
      facts = facts.slice(minAmount, minAmount+factsAmount)
    }
    let numberOfServerItems = await Post.count();
    if(!showOnlyUserFacts) {
      numberOfServerItems += 30;
    }
    let factsToSend = {
      facts: facts,
      total: numberOfServerItems
    }
    await res.send(factsToSend)
  });
});


router.post("/new-fact", async(req, res, next) => {
  const post = new Post({
    addedBy: req.body.addedBy,
    fact: req.body.fact,
  });

  let save = await post.save();
  res.status(201).json({
    fact: save
  })
});



module.exports = router;
