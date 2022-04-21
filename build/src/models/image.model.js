"use strict";
var mongoose_1 = require("mongoose");
var ImageSchema = new mongoose_1.Schema({
    imageID: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose_1.model('Image', ImageSchema);
