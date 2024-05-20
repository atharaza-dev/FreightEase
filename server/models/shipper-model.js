//? requiring dependecnies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const shipperSchema = new mongoose.Schema({
    name: {
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
    isShipper: {
        type: Boolean,
        default: true,
    }
})

// * securing the password with bcrypt:
shipperSchema.pre('save', async function () {
    const shipper = this; //refering to the shipperSchema object

    if (!shipper.isModified('password')) { //if passowrd is not changed or created
        next(); //if not then proceed next which is create method
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(shipper.password, saltRound);
        shipper.password = hashedPassword;
    } catch (error) {
        next(error); // if error occured here, throws error in next 
    }
});

//* Generating JWT
shipperSchema.methods.generateToken = async function () { //this generateToken method will be placed in res.status(200)
    try {
        return jwt.sign({ //the sign is the jwt method
            userId: this._id.toString(),
            name: this.name, //takes the _id object from MongoDB 
            email: this.email,
            isShipper: this.isShipper
        }, process.env.JWT_SECRET_KEY, { //secretkey of 
            expiresIn: '30d'
        });
    } catch (error) {
        console.error(error);
    }
}

const Shipper = new mongoose.model('Shipper-Accounts', shipperSchema);
module.exports = Shipper;