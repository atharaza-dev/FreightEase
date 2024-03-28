//? requiring dependecnies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
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
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

// * securing the password with bcrypt:
adminSchema.pre('save', async function () {
    const admin = this; //refering to the shipperSchema object

    if (!admin.isModified('password')) { //if passowrd is not changed or created
        next(); //if not then proceed next which is create method
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(admin.password, saltRound);
        admin.password = hashedPassword;
    } catch (error) {
        next(error); // if error occured here, throws error in next 
    }
});

//* Generating JWT
adminSchema.methods.generateToken = async function () { //this generateToken method will be placed in res.status(200)
    try {
        return jwt.sign({ //the sign is the jwt method
            userId: this._id.toString(), //takes the _id object from MongoDB 
            name: this.name,
            email: this.email,
            isAdmin: this.isAdmin,
        }, process.env.JWT_SECRET_KEY, { //secretkey of 
            expiresIn: '1d'
        });
    } catch (error) {
        console.error(error);
    }
}

const Admin = new mongoose.model('admin-account', adminSchema);
module.exports = Admin;