const mongoose = require('mongoose');


const PaymentSchema = new mongoose.Schema({
    Value: {
        type: Number,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    my_date: {
        type: String,
        required: true,
    },
    User_id: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Payment', PaymentSchema);