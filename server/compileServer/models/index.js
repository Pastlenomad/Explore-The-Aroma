'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const parfumeSchema_1 = require("./schemas/parfumeSchema");
const parfumeList_1 = require("./data/parfumeList");
let dataCopied = false;
mongoose_1.default.connect(`mongodb+srv://main:erban@main.qnqycrw.mongodb.net/`)
    .then(() => {
    console.log('Connected to MongoDB');
    Promise.all(parfumeList_1.parfumeList.map((data) => parfumeSchema_1.Parfume.create(data)))
        .then(() => {
        if (dataCopied) {
            console.log('Data saved successfully');
            dataCopied = false;
        }
    })
        .catch(error => {
        console.error('Error saving data:', error);
    });
})
    .catch(error => {
    console.error('Error connecting to MongoDB:', error);
});
exports.default = mongoose_1.default;
