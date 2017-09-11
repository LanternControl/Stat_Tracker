'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let ActivitySchema = new Schema({
  name_of_activity: {
    type: String,
    required: 'Enter your workout'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Activities', ActivitySchema);
