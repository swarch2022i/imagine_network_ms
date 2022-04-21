"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require('dotenv').config();
var config_1 = __importDefault(require("./database/config"));
//initializations
var app = express_1.default();
//middlewares
app.use(cors_1.default());
app.use(express_1.default.json());
config_1.default();
//Routes
app.use('/api/comments', require('./routes/comment.route.ts'));
app.use('/api/votes', require('./routes/vote.route.ts'));
//start server
app.listen(process.env.PORT, function () {
    console.log('server on port: ', process.env.PORT);
});
