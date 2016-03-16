'use strict';
var Requester = require('./Requester');

/**
 * User Service
 * @class User
 * @namespace user
 * @exports User
 */
class User {
    /**
     * Create Users
     * @method create_users
     */
    static create_users(users) {
        var data = {
            wstoken: Requester.Token,
            wsfunction: 'core_user_create_users',
            moodlewsrestformat: 'json',
            users: users
        };

        return Requester.Send(data, 'POST');
    }
    static delete_users() {}
    static update_users() {}
    static get_users_by_id() {}
    static get_course_user_profiles() {}
    static get_users_by_field() {}
    static get_users() {}
    static add_user_device() {}
    static remove_user_device() {}
    static view_user_list() {}
    static view_user_profile() {}
}

module.exports = User;