'use strict'
var Requester = require('./Requester')

/**
 * Enrol Service
 * @class Enrol
 * @namespace enrol
 * @exports Enrol
 */
class Enrol {

  /**
   * Get Course Enrolment Methods
   * @method get_course_enrolment_methods
   * @param courseid {Number}
   * @return {Promise}
   */
  static get_course_enrolment_methods (courseid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_enrol_get_course_enrolment_methods',
      moodlewsrestformat: 'json',
      courseid: courseid
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Enrolled Users
   * @method get_enrolled_users
   * @param courseid {Number}
   * @return {Promise}
   */
  static get_enrolled_users (courseid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_enrol_get_enrolled_users',
      moodlewsrestformat: 'json',
      courseid: courseid
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Enrolled Users with Capability
   * @method get_enrolled_users_with_capability
   * @param coursecapabilities {Array}
   * @return {Promise}
   */
  static get_enrolled_users_with_capability (coursecapabilities) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_enrol_get_enrolled_users_with_capability',
      moodlewsrestformat: 'json',
      coursecapabilities: coursecapabilities
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Users Courses
   * @method get_users_courses
   * @param userid {Number}
   * @return {Promise}
   */
  static get_users_courses (userid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_enrol_get_users_courses',
      moodlewsrestformat: 'json',
      userid: userid
    }

    return Requester.Send(data, 'POST')
  }
}

module.exports = Enrol
