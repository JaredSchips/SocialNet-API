const { Schema, model } = require('mongoose');

const User = model('user', new Schema({}));

module.exports = User;
