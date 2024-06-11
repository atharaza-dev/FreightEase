const shipmentDetails = require('../models/shipment-model');
const getVehicleList = require('../models/vehicle-insertion-model');

const bookVehicle = async (req, res) => {
    try {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.toLocaleString('en-us', { month: 'short' });
        const day = date.getDate();
        const shipmentDate = `${month} ${day} ${year}`;

        const {
            vehicleId,
            vendorId,
            shipmentId,
            userId,
            fullName,
            phone,
            itemWeight,
            cnic,
            originCity,
            fullOriginAddress,
            departureCity,
            fullDepartureAddress,
            goodsType,
            goodsQuantity,
            vendorName,
            vehicleType,
            vehicleName,
            routeFare,
            status,
        } = req.body;

        if (!vehicleId || !vendorId || !shipmentId || !itemWeight || !userId || !fullName || !phone || !cnic || !originCity || !fullOriginAddress || !departureCity || !fullDepartureAddress || !vehicleName || !vehicleType || !routeFare) {
            return res.status(422).json({ err: "Enter all details first" });
        }

        const shipmentCharges = itemWeight * routeFare;
        const shipperCommission = shipmentCharges * 0.01;
        const twoPer = shipmentCharges * 0.02;
        const vendorCommission = shipmentCharges - twoPer;

        const shippmentSuccessfull = await shipmentDetails.create({
            vehicleId,
            vendorId,
            shipmentId,
            userId,
            fullName,
            shipmentDate,
            phone,
            shipmentDate,
            cnic,
            originCity,
            itemWeight,
            fullOriginAddress,
            departureCity,
            fullDepartureAddress,
            goodsType,
            goodsQuantity,
            vendorName,
            vehicleType,
            vehicleName,
            routeFare,
            shipmentCharges,
            shipperCommission,
            vendorCommission,
            status,
        });

        res.status(201).json({ msg: "Vehicle Booked Successfully" });
        console.log({ Shipment: shippmentSuccessfull });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
}


const getAllVehicles = async (req, res) => {
    try {
        const getAllVehicles = await getVehicleList.find();
        if (!getAllVehicles) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(getAllVehicles);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//! find vendor by id:
const geVehicleDataForBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const vendorFound = await getVehicleList.findById(id);
        if (!vendorFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        res.status(200).json(vendorFound);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { bookVehicle, getAllVehicles, geVehicleDataForBooking };