if (process.env.NODE_ENV === 'production') {
  // we are in production return the prod keys
  module.exports = require('./prod');
} else {
  // we are in production return the dev
  module.exports = require('./dev');
}
