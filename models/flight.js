const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flight_id: { type: String, unique: true, required: true },
  airline: String,
  status: String,
  departure_gate: String,
  arrival_gate: String,
  scheduled_departure: Date,
  scheduled_arrival: Date,
  actual_departure: Date,
  actual_arrival: Date
});

const flight = mongoose.model('flight', flightSchema);

module.exports = flight;