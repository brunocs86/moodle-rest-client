'use strict'
var Requester = require('./Requester')

/**
 * Custom Service
 * @class Custom
 * @namespace Custom
 * @exports Custom
 */
class Custom {

  /**
   * Custom Command
   * @method command
   * @param wsfunction {String}
   * @param key {String}
   * @param value {*}
   * @param method {String=}
   * @return {Promise}
   */
  static command (wsfunction, key, value, method) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: wsfunction,
      moodlewsrestformat: 'json',
      [key]: value
    }

    return Requester.Send(data, method || 'POST')
  }
}

module.exports = Custom
