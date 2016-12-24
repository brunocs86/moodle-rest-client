Moodle REST client for NodeJS (BETA)
===
[![npm version](https://badge.fury.io/js/moodle-rest-client.svg)](http://badge.fury.io/js/moodle-rest-client)
[![npm dependency status](https://david-dm.org/virgilioneto/moodle-rest-client.svg)](https://david-dm.org/virgilioneto/moodle-rest-client)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Information
Node.js module for Moodle Rest Service integration

## Setup

### Npm
```bash
npm install moodle-rest-client --save
 ```

### Yarn
```bash
yarn add moodle-rest-client
```
 
## Usage

### Instance
```javascript
const {MoodleRestClient} = require('moodle-rest-client')
//Default use. Results in: http://your-moodle-url.com
const client = new MoodleRestClient('your-moodle-url.com', 'your-moodle-token')
//Using https. Results in: http://your-moodle-url.com
const client = new MoodleRestClient('your-moodle-url.com', 'your-moodle-token',
    {protocol: 'https'}
)
//Using diferent port. Results in: http://your-moodle-url.com:8080
const client = new MoodleRestClient('your-moodle-url.com', 'your-moodle-token',
    {port: 8080}
)
//Using subdirectory. Results in: http://your-moodle-url.com/moodle
const client = new MoodleRestClient('your-moodle-url.com', 'your-moodle-token',
    {subdirectory: 'moodle'}
)
//Using all together. Results in: https://your-moodle-url.com:8080/moodle
const client = new MoodleRestClient('your-moodle-url.com', 'your-moodle-token',
    {protocol: 'https', port: 8080, subdirectory: 'moodle'}
)
```

### Request
The method `client.send` expects three params:
* **wsFunction**: Moodle webservice function name
* **Key**: Moodle webservice function  parameter key
* **Value**: Moodle webservice function parameter value

#### Get user sample
```javascript
client.send('core_user_get_users', 'criteria', [{key: 'id', value: 2}])
  .then((data) => {
    //Do yout stuff if the result
  })
  .catch((error) => {
    //Handle the request error
  })
```

#### Create user sample
```javascript
let data = [{
    username: 'username',
    password: 'Strong@pass123',
    firstname: 'Firstname',
    lastname: 'Lastname',
    email: 'user@provider.com'
}]
client.send('core_user_create_users', 'criteria', [{key: 'id', value: 2}])
  .then((data) => {
    //Do yout stuff if the result
  })
  .catch((error) => {
    //Handle the request error
  })
```
## Reference
* [Module API documentation](https://virgilioneto.github.io/moodle-rest-client)
* [Moodle webservice overview](http://your-moodle-url.com/admin/settings.php?section=webservicesoverview)
* [Moodle webservice documentation](http://your-moodle-url.com/admin/webservice/documentation.php)
* [Moodle webservice protocols](http://your-moodle-url.com/admin/settings.php?section=webserviceprotocols)
* [Moodle webservice external functions](http://your-moodle-url.com/admin/settings.php?section=externalservices)
* [Moodle webservice token configuration](http://your-moodle-url.com/admin/settings.php?section=webservicetokens)
