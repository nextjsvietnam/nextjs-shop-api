/**
 * internalServerError.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.internalServerError();
 *     // -or-
 *     return res.internalServerError(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'internalServerError'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function internalServerError(optionalData) {
  // Get access to `req` and `res`
  const req = this.req;
  const res = this.res;

  // Define the status code to send in the response.
  const statusCodeToSet = 500;

  // If no data was provided, use res.sendStatus().
  if (optionalData === undefined) {
    return res.sendStatus(statusCodeToSet);
  }
  if (_.isError(optionalData)) {
    sails.log.error("[Server Error 500]", optionalData);
    if (process.env.NODE_ENV === "production") {
      return res.sendStatus(statusCodeToSet);
    }
    return res.status(statusCodeToSet).send(optionalData.stack);
  }
  // default
  return res.status(statusCodeToSet).send(optionalData);
};
