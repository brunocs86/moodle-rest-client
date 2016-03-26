'use strict'
var Requester = require('./lib/Requester')
var http = require('http')
var https = require('https')

class Client {

  /**
   * Moodle Rest Client
   * @param options {Object} Client Co  nfiguration
   * @param options.host {String} Moodle URL (mymoodle.com)
   * @param options.port {Number=} Port Number, default 80
   * @param options.subDirectory {String=} Site subdirectory
   * @param options.https {Boolean=} Default false, if true use HTTPS instead HTTP
   * @param options.token {String=} Moodle Authentication Token
   */
  static setUp (options) {
    Requester.Host = options.host
    Requester.Port = options.port || 80
    Requester.SubDirectory = options.subDirectory || ''
    Requester.Transporter = options.https ? https : http
    Requester.Token = options.token || ''
  }

  static get User () {
    return require('./lib/User')
  }
}

module.exports = (options) => {
  Client.setUp(options)
  return Client
}
