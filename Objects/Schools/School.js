const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    city: String,
    street: String,
    buildingNumber: String,
    postalCode: String,
  },
  phone: Number,
  status: {
    type: Number,
    default: 1,
  },
  classes: [{
    type: mongoose.Types.ObjectId,
    ref: 'Class'
  }],
  teachers: [{
    type: mongoose.Types.ObjectId,
    ref: 'Teacher'
  }],
});


module.exports = mongoose.model('School', schoolSchema);
