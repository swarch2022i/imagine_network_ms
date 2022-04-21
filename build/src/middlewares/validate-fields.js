"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var express_1 = require("express");
exports.validateFields = function (req, res, next) {
    if (req === void 0) { req = express_1.request; }
    if (res === void 0) { res = express_1.response; }
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    }
    next();
};
