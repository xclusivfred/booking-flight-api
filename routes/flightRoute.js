const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.post('/flight', controller.addFlight);
router.get('/flight', controller.getFlights);
router.get('/flight/:id', controller.getFlightById);
router.put('/flight/:id', controller.updateFlightById);
router.delete('/flight/:id', controller.deleteFlightById);

module.exports = router;

