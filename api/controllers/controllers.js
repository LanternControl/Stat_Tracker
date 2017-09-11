'use strict';


let mongoose = require('mongoose'),
  Activity = mongoose.model('Activities');

exports.list_all_activities = function(req, res) {
  Activity.find({}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.create_an_activity = function(req, res) {
  let new_activity = new Activity(req.body);
  new_activity.save(function(err, activity) {
    if (err)
      res.send(err);
      res.json(activity);
  });
};

exports.read_a_activity = function(req, res) {
  Activity.findById(req.params.activityId, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.update_an_activity = function(req, res) {
  Activity.findOneAndUpdate({_id: req.params.activityId}, req.body, {new: true}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.delete_an_activity = function(req, res) {
  Activity.remove({_id: req.params.activityId}, function(err, activity) {
    if (err)
      res.send(err);
    res.json({ message: 'Activity successfully deleted' });
  });
};

// exports.add_tracked_data = function(req, res) {
//   Activity.findOneAndUpdate({_id: req.params.activityId}),
//     {
//       'name_of_activity': req.body.name_of_activity,
//       'created_date': req.body.created_date,
//       'status': req.body.status
//     }
//   .then(function(activity){
//   res.json(activity);
//   });
// };

// exports.delete_a_day = function(req, res) {
//   Activity.deleteMany({_id: req.params.activityId}, function(err, activity){
//     if (err)
//       res.send(err);
//     res.json(activity);
//   });
// };
