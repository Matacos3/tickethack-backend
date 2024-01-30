const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    trips : { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
});

const Booking = mongoose.model('cart', bookingSchema);





module.exports = Booking;