const models = require("../models/Flight");
let flightArray = models.flights;

exports.getFlights = (req, res) => {
    return res.status(200).json({
        status: "success",
        message: 'All Flights fetched successfully',
        data: flightArray
    })
}

exports.addFlight = (req, res) => {
    flightArray.push(req.body);
    return res.status(201).json({
        status: "success",
        message: 'Flight added successfully',
        data: req.body
    })
};

exports.getFlightById = (req, res) => {
    let id = req.params.id;
    let foundFlight = flightArray.find(flight => String(flight.id) === id)
    if (foundFlight) {
        return res.status(200).json({
            status: "success",
            message: "Flight fetched successfully",
            data: foundFlight
        })
    } else {
        return res.status(404).json({
            status: "error",
            message: "Flight not found"
        })
    }
};

exports.updateFlightById = (req, res) => {
    let id = req.params.id;
    let updated;
    let data = flightArray.find(flight => flight.id == id)
    if (data) {
        updated = {
            id: data.id,
            title: req.body.title,
            time: req.body.time,
            price: req.body.price,
            date: req.body.date
        };
        flightArray.splice(data.id, 1, updated);
    } else {
        return res.status(404).json({
            status: "error",
            message: "Flight not found"
        })
    }
    return res.status(200).json({
        status: "success",
        message: 'Flight updated successfully',
        data: updated
    })
};

exports.deleteFlightById = (req, res) => {
    let id = req.params.id;
    const index = flightArray.findIndex(flight => flight.id == id);
    flightArray.splice(index, 1);
    return res.status(200).json({
        status: "success",
        code: 200,
        message: 'Flight deleted successfully',
    })
};