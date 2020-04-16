const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolePermission = new Schema({
  key: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Permission', rolePermission);
