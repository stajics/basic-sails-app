/**
 * 500 (Internal Server Error) Response
 *
 * A generic error message, given when no more specific message is suitable.
 * The general catch-all error when the server-side throws an exception.
 */
const util = require('util');

module.exports = function serverError(data, config) {
  if (sails.config.log.consoleLogErrorResponses) {
    console.log(data);
  }
  const responseData = util.inspect(data);
  const response = Object.assign({
    status: 'error',
    message: 'Something bad happened on the server.',
    data: responseData || null,
  }, config);

  this.res.status(500);
  this.res.jsonx(response);
};
