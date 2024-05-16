const moongoose = require("mongoose");

const productSchema = moongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: Number,
    textcolor: Number,
});

module.exports = moongoose.model("product", productSchema);