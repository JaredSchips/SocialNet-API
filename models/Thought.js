const { Schema, model } = require('mongoose');

const Thought = model('thought', new Schema({}));

module.exports = Thought;
