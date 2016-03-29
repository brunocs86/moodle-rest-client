'use strict'
var Requester = require('./Requester')

/**
 * Course Service
 * @class Course
 * @namespace course
 * @exports Course
 */
class Course {

  /**
   * Create Categories
   * @method create_categories
   * @param categories {Array}
   * @return {Promise}
   */
  static create_categories (categories) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_create_categories',
      moodlewsrestformat: 'json',
      categories: categories
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Create Courses
   * @method create_courses
   * @param courses {Array}
   * @return {Promise}
   */
  static create_courses (courses) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_create_courses',
      moodlewsrestformat: 'json',
      courses: courses
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Delete Categories
   * @method delete_categories
   * @param categories {Array}
   * @return {Promise}
   */
  static delete_categories (categories) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_delete_categories',
      moodlewsrestformat: 'json',
      categories: categories
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Delete Courses
   * @method delete_courses
   * @param courseids {Array}
   * @return {Promise}
   */
  static delete_courses (courseids) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_delete_courses',
      moodlewsrestformat: 'json',
      courseids: courseids
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Delete Modules
   * @method delete_modules
   * @param cmids {Array}
   * @return {Promise}
   */
  static delete_modules (cmids) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_delete_modules',
      moodlewsrestformat: 'json',
      cmids: cmids
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Duplicate Course
   * @method duplicate_course
   * @param courseid {Number}
   * @returns {Promise}
   */
  static duplicate_course (courseid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_duplicate_course',
      moodlewsrestformat: 'json',
      courseid: courseid
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Categories
   * @method get_categories
   * @param criteria {Array}
   * @returns {Promise}
   */
  static get_categories (criteria) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_get_categories',
      moodlewsrestformat: 'json',
      criteria: criteria
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Contents
   * @method get_contents
   * @param courseid {Number}
   * @returns {Promise}
   */
  static get_contents (courseid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_get_contents',
      moodlewsrestformat: 'json',
      courseid: courseid
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Get Courses
   * @method get_courses
   * @param options {Array}
   * @returns {Promise}
   */
  static get_courses (options) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_get_courses',
      moodlewsrestformat: 'json',
      options: options
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Import Course
   * @method import_course
   * @param importfrom {Number}
   * @returns {Promise}
   */
  static import_course (importfrom) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_import_course',
      moodlewsrestformat: 'json',
      importfrom: importfrom
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Update Categories
   * @method update_categories
   * @param categories {Array}
   * @returns {Promise}
   */
  static update_categories (categories) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_update_categories',
      moodlewsrestformat: 'json',
      categories: categories
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * Update Courses
   * @method update_courses
   * @param courses {Array}
   * @returns {Promise}
   */
  static update_courses (courses) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_update_courses',
      moodlewsrestformat: 'json',
      courses: courses
    }

    return Requester.Send(data, 'POST')
  }

  /**
   * View Course
   * @method view_course
   * @param courseid {Number}
   * @returns {Promise}
   */
  static view_course (courseid) {
    var data = {
      wstoken: Requester.Token,
      wsfunction: 'core_course_view_course',
      moodlewsrestformat: 'json',
      courseid: courseid
    }

    return Requester.Send(data, 'POST')
  }
}

module.exports = Course
