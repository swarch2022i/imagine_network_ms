"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var express_1 = require("express");
var voteCtrl = __importStar(require("../controllers/vote.controller"));
var router = express_1.Router();
router.get('/:id', voteCtrl.getVotesByImage);
router.put('/', voteCtrl.addVote);
module.exports = router;
