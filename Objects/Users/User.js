const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 1,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
  },

});


module.exports = mongoose.model('User', userSchema);
