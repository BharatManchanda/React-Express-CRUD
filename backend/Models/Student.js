const mongoose = require('mongoose')

const student = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address_line_1: {
        type: String,
        required: true,
    },
    address_line_2: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip_code: {
        type: String,
        required: true,
    },

});

const Student = mongoose.model('Student', student)

module.exports = {
    Student,
}