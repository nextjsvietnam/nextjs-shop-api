/**
 * success.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.success();
 *     // -or-
 *     return res.success(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'success'
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

module.exports = function success(optionalData) {
  // Get access to `req` and `res`
  const req = this.req;
  const res = this.res;

  // Define the status code to send in the response.
  const statusCodeToSet = 200;

  // If no data was provided, use res.sendStatus().
  if (optionalData === undefined) {
    return res.sendStatus(201);
  } else {
    return res.status(statusCodeToSet).send(optionalData);
  }
};
