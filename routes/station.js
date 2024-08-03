const express = require('express');
const router = express.Router();
const Station = require('../models/Station');

router.get('/stations', async (req, res) => {
  try {
    const searchQuery = req.query.q;
    if (searchQuery.length < 3) {
      return res.status(400).send('Query must be at least 3 characters long');
    }
    const stations = await Station.find({
      station_name: { $regex: `^${searchQuery}`, $options: 'i' }
    });
    res.json(stations);
  } catch (error) {
    console.error('Error fetching stations:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
