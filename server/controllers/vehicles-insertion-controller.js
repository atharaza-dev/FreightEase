const vehicleInsertion = require('../models/vehicle-insertion-model');

//! Inserting new Vehicles ====================
const insertVehicles = async (req, res) => {
    try {
        const { userId, registration, vendorName, vehicleName, originCity, departureCity, routeCharges, vehicleType, imgUrl } = req.body;

        if (!registration || !vehicleName || !originCity || !departureCity || !routeCharges || !vehicleType) {
            return res.status(422).json({ err: "Enter all details first" });
        }

        const vehicleExists = await vehicleInsertion.findOne({ userId, vehicleName, registration, originCity, departureCity, routeCharges, vehicleType, imgUrl });
        if (vehicleExists) {
            return res.status(400).json({ msg: "This Registered Vehicle Type with these routes already exists!" });
        } else {
            const vehicleAdded = await vehicleInsertion.create({ userId, vehicleName, registration, vendorName, originCity, departureCity, routeCharges, vehicleType, imgUrl });
            res.status(201).json({ msg: "VENDOR Registration Successful", vehicleAdded });
            console.log({ vehicle: vehicleAdded });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

//! Getting Vehicles data ====================
const getVehiclesData = async (req, res) => {
    try {
        const userId = req.params.userId;
        const vehicleData = await vehicleInsertion.find({ userId: userId });
        if (!vehicleData) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(vehicleData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error);
    }
}

//! Deleting Vehicles data ====================
const deleteVehicle = async (req, res) => {
    const { id } = req.params;

    try {
        // Assuming vehicleInsertion is your Mongoose model
        const deletedVehicle = await vehicleInsertion.findOneAndDelete({ _id: id });

        if (!deletedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}


//! Getting Vehicles data ====================
const findVehicle = async (req, res) => {
    try {
        const id = req.params.id;
        const vehicleFound = await vehicleInsertion.findById(id);
        if (!vehicleFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        res.status(200).json(vehicleFound);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//! updating vehicle account information
const updateVehicle = async (req, res) => {
    try {
        const id = req.params.id;
        const vehicleFound = await vehicleInsertion.findById(id);
        if (!vehicleFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        const updateVendor = await vehicleInsertion.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: 'Vehicle Data Successfully Updated!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { insertVehicles, getVehiclesData, deleteVehicle, findVehicle, updateVehicle };