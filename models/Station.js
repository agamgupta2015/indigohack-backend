const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  station_id: {
    type: String,
    required: true,
    unique: true
  },
  station_name: {
    type: String,
    required: true
  }
});

const Station = mongoose.model('Station', stationSchema);

module.exports = Station;
