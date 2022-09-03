const mongoose = require('mongoose');
const validator = require('validator');
var findOrCreate = require('mongoose-findorcreate')
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please tell your name']
  },
  email: {
    type: String,
    // required: [true, 'provide an email'],
    unique: true,
    lowercase: true,
    
  },
  photo: String,
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      default: 'Point',
      enum: ['Point'], // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Number],
    }
  }
});

userSchema.plugin(findOrCreate);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // ren function if password is modified

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordconfirm = undefined;
  next();
}); 

userSchema.methods.correctpassword = async function(
  candidatepassword,
  userpassword
) {
  return await bcrypt.compare(candidatepassword, userpassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
