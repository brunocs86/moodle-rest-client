# Moodle REST client for NodeJS (BETA)

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