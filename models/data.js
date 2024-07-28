const Flight = require('./flight')
const Notification = require('./notify')
const mongoose = require('mongoose');

const sampleFlights = [
    {
      flight_id: "6E 2341",
      airline: "Indigo",
      status: "On Time",
      departure_gate: "A12",
      arrival_gate: "B7",
      scheduled_departure: new Date("2024-07-26T14:00:00Z"),
      scheduled_arrival: new Date("2024-07-26T18:00:00Z"),
      actual_departure: null,
      actual_arrival: null
    },
    {
      flight_id: "6E 2342",
      airline: "Indigo",
      status: "Delayed",
      departure_gate: "C3",
      arrival_gate: "D4",
      scheduled_departure: new Date("2024-07-26T16:00:00Z"),
      scheduled_arrival: new Date("2024-07-26T20:00:00Z"),
      actual_departure: null,
      actual_arrival: null
    },
    {
      flight_id: "6E",
      airline: "Indigo",
      status: "Cancelled",
      departure_gate: "E2",
      arrival_gate: "F1",
      scheduled_departure: new Date("2024-07-26T12:00:00Z"),
      scheduled_arrival: new Date("2024-07-26T16:00:00Z"),
      actual_departure: null,
      actual_arrival: null
    },
    {
      flight_id: "6E 2344",
      airline: "Indigo",
      status: "On Time",
      departure_gate: "B5",
      arrival_gate: "C2",
      scheduled_departure: new Date("2024-07-26T19:00:00Z"),
      scheduled_arrival: new Date("2024-07-26T23:00:00Z"),
      actual_departure: null,
      actual_arrival: null
    },
    {
      flight_id: "AI 101",
      airline: "Air India",
      status: "Delayed",
      departure_gate: "D6",
      arrival_gate: "E3",
      scheduled_departure: new Date("2024-07-26T20:00:00Z"),
      scheduled_arrival: new Date("2024-07-27T00:00:00Z"),
      actual_departure: null,
      actual_arrival: null
    }
  ];
  
  const sampleNotifications = [
    {
      notification_id: "1",
      flight_id: "6E 2341",
      message: "Your flight 6E 2341 is on time. Departure gate: A12.",
      timestamp: new Date("2024-07-26T13:00:00Z"),
      method: "SMS",
      recipient: "8769225638"
    },
    {
      notification_id: "2",
      flight_id: "6E 2342",
      message: "Your flight 6E 2342 is delayed. New departure time: 2024-07-26T17:00:00Z. Departure gate: C3.",
      timestamp: new Date("2024-07-26T15:30:00Z"),
      method: "SMS",
      recipient: "8769225638"
    },
    {
      notification_id: "3",
      flight_id: "6E 2343",
      message: "Your flight 6E 2343 has been cancelled.",
      timestamp: new Date("2024-07-26T11:00:00Z"),
      method: "SMS",
      recipient: "8769225638"
    },
    {
      notification_id: "4",
      flight_id: "6E 2344",
      message: "Your flight 6E 2344 is on time. Departure gate: B5.",
      timestamp: new Date("2024-07-26T18:00:00Z"),
      method: "SMS",
      recipient: "8769225638"
    },
    {
      notification_id: "5",
      flight_id: "AI 101",
      message: "Your flight AI 101 is delayed. New departure time: 2024-07-26T21:00:00Z. Departure gate: D6.",
      timestamp: new Date("2024-07-26T19:30:00Z"),
      method: "SMS",
      recipient: "8769225638"
    }
  ];
  
  const insertData = async () => {
    try {
      await Flight.insertMany(sampleFlights);
      console.log('Flight data inserted successfully');
  
      await Notification.insertMany(sampleNotifications);
      console.log('Notification data inserted successfully');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  
module.exports = insertData;
  