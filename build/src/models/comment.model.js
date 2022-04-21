"use strict";
var mongoose_1 = require("mongoose");
var CommentSchema = new mongoose_1.Schema({
    imageID: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});
module.exports = mongoose_1.model('Comment', CommentSchema);
