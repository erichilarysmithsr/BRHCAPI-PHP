"use strict";
let datafire = require('datafire');

let reddit_rss = require('@datafire/reddit_rss').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let feed = await Promise.all([].map(item => reddit_rss.frontPage({}, context)));
    return feed;
  },
});
