const { Router } = require("express");
const route = Router();
const mongoose = require('mongoose');
const Flight = require('../models/flight')
const Notification = require('../models/notify')
const twilio = require('twilio');


accountSid = "XXXXXXXX",
authToken = "XXXXXXX",
twilioPhoneNumber = "XXXXXX"

const client = twilio(accountSid, authToken);

const sendSmsNotification = async (to, message) => {
  try {
    const messageResponse = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: to
    });
    console.log('SMS sent:', messageResponse.sid);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};

// Fetch flight data
route.get('/all', async (req, res) => {
    const flights = await Flight.find();
    res.json(flights);
});



// Update flight status
route.put('/:flight_id', async (req, res) => {
  const { flight_id } = req.params;
  const update = req.body;

  try {
    const flight = await Flight.findOne({ flight_id: flight_id });
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    // Check if the status has changed
    if (update.status && update.status !== flight.status) {
      // Update flight
      const updatedFlight = await Flight.findOneAndUpdate({ flight_id: flight_id }, update, { new: true });

      // Create and send notification
      const notification = new Notification({
        notification_id: new mongoose.Types.ObjectId().toString(),
        flight_id: flight_id,
        message: `Your flight ${flight_id} is ${update.status}. Departure gate: ${updatedFlight.departure_gate}.`,
        timestamp: new Date(),
        method: "SMS",
        recipient: "XXXXX" // Replace with actual recipient phone number
      });
      await notification.save();
      await sendSmsNotification(notification.recipient, notification.message);

      res.json(updatedFlight);
    } else {
      const updatedFlight = await Flight.findOneAndUpdate({ flight_id: flight_id }, update, { new: true });
      res.json(updatedFlight);
    }
  } catch (error) {
    console.error('Error updating flight:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = route;
