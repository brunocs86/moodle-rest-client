Moodle REST client for NodeJS (BETA)
===
[![npm version](https://badge.fury.io/js/moodle-rest-client.svg)](http://badge.fury.io/js/moodle-rest-client)
[![npm dependency status](https://david-dm.org/virgilioneto/moodle-rest-client.svg)](https://david-dm.org/virgilioneto/moodle-rest-client)
[![Build Status](https://travis-ci.org/virgilioneto/moodle-rest-client.svg?branch=master)](https://travis-ci.org/virgilioneto/moodle-rest-client)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


## Instalation
 ```
    npm install moodle-rest-client --save
 ```
 
## Usage
    var Client = require('moodle-rest-client')(
        {
            host: 'yourmoodleurl.com',
            token: 'moodleclienttokenhere'
        }
    );
    
    Client.User.create_users(
        [
            {
                username: 'username',
                password : 'password',
                firstname : 'Firstname',
                lastname : 'Lastname',
                email : 'user@yourmoodleurl.com'
            }
        ]
    )
    .then((data) => {
        //Handle result here.
    })
    .catch((err) => {
        //Habdle error here
    });

## Reference
You can find moodle service documentation on http://yourmoodleurl.com/admin/webservice/documentation.php