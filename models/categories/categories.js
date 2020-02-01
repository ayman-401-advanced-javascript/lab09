'use strict';

const scheama = require('./categories-schema');
const Model = require('../model');

class Categories extends Model{}

module.exports = new Categories(scheama);