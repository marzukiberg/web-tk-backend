const { default: mongoose } = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: 'string',
    password: 'string',
    tanggal_dibuat: 'date',
  },
  {
    collection: 'user',
  }
);
const User = mongoose.model('User', UserSchema);

module.exports = User;
