'use strict';

const scheama = require('./products-schema');
const Model = require('../model');

class Products extends Model{}

module.exports = new Products(scheama);