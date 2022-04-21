"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var commentCtrl = __importStar(require("../controllers/comment.controller"));
var validate_fields_1 = require("../middlewares/validate-fields");
var router = express_1.Router();
router.get('/', commentCtrl.getCommentsByImage);
router.post('/', [
    express_validator_1.check('imageID', 'the imageID is mandatory').not().isEmpty(),
    express_validator_1.check('message', 'the message is mandatory').not().isEmpty(),
    validate_fields_1.validateFields,
], commentCtrl.createComment);
router.delete('/:id', commentCtrl.deleteComment);
router.put('/:id', [validate_fields_1.validateFields], commentCtrl.editComment);
module.exports = router;
