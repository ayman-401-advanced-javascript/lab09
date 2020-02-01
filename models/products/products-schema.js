'use strict';
const mongoose = require('mongoose');
require('../categories/categories-schema');
const products = mongoose.Schema({
  categoryName: {type:String, required: true},
  name: {type:String, required: true},
  price: { type: Number, required: true },
  weight: { type: Number},
  quantityInStock: {type: Number, required: true},
},{toOBject:{virtuals: true}, toJSON: {virtuals: true}});

module.exports = mongoose.model('products',products);