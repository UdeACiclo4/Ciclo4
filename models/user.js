const mongoose = require('mongoose');
const Shema = mongoose.Shema;
const UserShema = new Shema({
    name: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,
    }, password: {
        type: String,
        required: true,
    }, date: {
        type: Date,
        required: Date.now(),
    },
});
module.exports = User = mongoose.model("users", UserShema);