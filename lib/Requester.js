'use strict';
var qs = require('qs');

/**
 * Base Request Client
 * @class Requester
 */
class Requester {

    /**
     * Prepare Request
     * @method Prepare
     * @param method {String=} Request Method (GET, POST, PUT, DELETE), default GET
     * @param contentLength {Number=} Request Content Length
     * @return {Object} Request Options
     */
    static Prepare(method, contentLength) {
        var options, path;
        path = '/webservice/rest/server.php';
        method = method || 'GET';
        if (!method.match(/GET|POST|PUT|DELETE/)) throw new Error('Invalid Request Method');

        options = {
            hostname: Requester.Host,
            path: path,
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/x-www-form-urlencoded'
            },
            port: Requester.Port
        };

        if (contentLength) options.headers['Content-Length'] = contentLength;

        return options;
    }

    /**
     * Base Sender Function
     * @method Sender
     * @param _data {Object=} Request Data
     * @param method {String=} Request Method (GET, POST, PUT, DELETE), default GET
     * @return {Promise} Request Promise
     */
    static Send(_data, method) {
        return new Promise((resolve, reject) => {
            var options, req, encoded = "";

            if (_data) encoded = qs.stringify(_data);

            options = Requester.Prepare(method, encoded.length);
            req = Requester.Transporter.request(
                options,
                (res) => {
                    var body = '';
                    res.on('data', (chunk) => {
                        body += chunk;
                    });

                    res.on('end', () => {
                        var response;
                        if (res.statusCode < 400) {
                            try {
                                response = JSON.parse(body);
                            } catch (err) {
                                response = body;
                            }

                            resolve(response);
                        }
                        else reject(new Error(body || `${res.statusCode} - ${res.statusMessage}`));
                    })
                }
            );

            req.on('error', reject);

            if (_data) req.write(encoded);
            req.end();
        });
    }
}

module.exports = Requester;