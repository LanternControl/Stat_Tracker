'use strict';
module.exports = function(app) {
  let activityList = require('../controllers/controllers');


  app.route('/activities')
    .get(activityList.list_all_activities)
    .post(activityList.create_an_activity);

  app.route('/activities/:activityId')
    .get(activityList.read_an_activity)
    .put(activityList.update_an_activity)
    .delete(activityList.delete_an_activity);

};
  // app.route('/api/activities/:activityId/stats')
  //   .get(activityList.read_an_activity)
  //   .post(activityList.add_tracked_data);

//   app.route('/api/stats/:activityId')
//     .delete(activityList.delete_a_day);
