const { connect, connection } = require('mongoose');

connect('mongodb://localhost/SocialNetDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
