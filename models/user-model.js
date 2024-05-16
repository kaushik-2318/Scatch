const moongoose = require("mongoose");

moongoose.connect("mongodb://localhost:27017/Scatch");

const userSchema = moongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
});

module.exports = moongoose.model("user", userSchema);