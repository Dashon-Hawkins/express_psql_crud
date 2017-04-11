/**
 * Created by rachelkoldenhoven on 3/18/16.
 */
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);