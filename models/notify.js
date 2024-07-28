const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  notification_id: { type: String, unique: true, required: true },
  flight_id: String,
  message: String,
  timestamp: Date,
  method: String,
  recipient: String
});
  
  const notify = mongoose.model('notification', notificationSchema);
  module.exports = notify;