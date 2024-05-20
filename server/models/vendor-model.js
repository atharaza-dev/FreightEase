//? requiring dependecnies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    cnic: {
        type: Number,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    regNum: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isVendor: {
        type: Boolean,
        default: true
    }
})

// * securing the password with bcrypt:
vendorSchema.pre('save', async function () {
    const vendor = this;

    if (!vendor.isModified('password')) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(vendor.password, saltRound);
        vendor.password = hashedPassword;
    } catch (error) {
        next(error);
    }
})

//* Generating JWT
vendorSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id,
            name: this.name,
            password: this.password,
            cnic: this.cnic,
            phone: this.phone,
            regNum: this.regNum,
            email: this.email,
            isVendor: this.isVendor
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '30d'
        });
    } catch (error) {

    }
}


const Vendor = new mongoose.model('Vendor-Accounts', vendorSchema);
module.exports = Vendor;