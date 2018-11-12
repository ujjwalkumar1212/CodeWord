/**
 * @author Sravya Kancharla <S531500@nwmissouri.edu>
 */

var mongoose = require('mongoose');
var validator = require('validator');

var CourseModel = mongoose.model('courseModel', {
    courseNameKey: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 5
   },
   emailKey:{
    type: String,
    require: true,
    minlength: 3
   },
   codeWordSetName:{
    type: String,
    require: true,
    minlength: 5
   },
   Startdate: {
    type: String,
    require: true,
    minlength: 5
   },
   Enddate: {
    type: String,
    require: true,
    minlength: 5
   },
   PreSurveyURL: {
    type: String
   },
   PostSurveyURL: {
    type: String
   }
});
module.exports.CourseModel = CourseModel