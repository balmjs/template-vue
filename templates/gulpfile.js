/* eslint-env node */
const balm = require('balm');
const config = require('./config/balmrc');
const publish = require('./config/balm.publish');

balm.config = config;

balm.go(mix => {
  publish(mix);
});
