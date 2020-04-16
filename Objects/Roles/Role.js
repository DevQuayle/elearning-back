const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleShema = new Schema({
  key:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  permissions: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model('Role', roleShema);
