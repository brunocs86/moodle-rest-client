'use strict'
var Requester = require('./Requester')

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
   * @param users {Array}
   * @return {Promise}
   */
  static create_users (users) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_create_users',
      moodlewsrestformat: 'json',
      users: users
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Delete Users
   * @method delete_users
   * @param userids {Array}
   * @return {Promise}
   */
  static delete_users (userids) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_delete_users',
      moodlewsrestformat: 'json',
      userids: userids
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Update Users
   * @method update_users
   * @param users {Array}
   * @return {Promise}
   */
  static update_users (users) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_update_users',
      moodlewsrestformat: 'json',
      users: users
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Users by Id
   * @method get_users_by_id
   * @param userids {Array}
   * @return {Promise}
   */
  static get_users_by_id (userids) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_users_by_id',
      moodlewsrestformat: 'json',
      userids: userids
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Course User Profiles
   * @method get_course_user_profiles
   * @param userlist {Array}
   * @return {Promise}
   */
  static get_course_user_profiles (userlist) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_get_course_user_profiles',
      moodlewsrestformat: 'json',
      userlist: userlist
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Users by Fields
   * @method get_users_by_field
   * @param field {String}
   * @param value {String}
   * @returns {Promise}
   */
  static get_users_by_field (field, value) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_users_by_field',
      moodlewsrestformat: 'json',
      [field]: value
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Users
   * @method get_users
   * @param criteria {Array}
   * @returns {Promise}
   */
  static get_users (criteria) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_get_users',
      moodlewsrestformat: 'json',
      criteria: criteria
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Add User Device
   * @method add_user_device
   * @param appid {String}
   * @returns {Promise}
   */
  static add_user_device (appid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_add_user_device',
      moodlewsrestformat: 'json',
      appid: appid
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Remove User Device
   * @method remove_user_device
   * @param appid {String}
   * @returns {Promise}
   */
  static remove_user_device (appid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_remove_user_device',
      moodlewsrestformat: 'json',
      appid: appid
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * View User List
   * @method view_user_list
   * @param courseid {Number}
   * @returns {Promise}
   */
  static view_user_list (courseid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_view_user_list',
      moodlewsrestformat: 'json',
      courseid: courseid
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * View User Profile
   * @method view_user_profile
   * @param userid {Number}
   * @returns {Promise}
   */
  static view_user_profile (userid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_user_view_user_profile',
      moodlewsrestformat: 'json',
      userid: userid
    }

    return Requester.Send(data, 'POST')
  }
}

module.exports = User
