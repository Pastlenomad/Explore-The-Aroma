'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const parfumeSchema_1 = require("../models/schemas/parfumeSchema");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parfumes = yield parfumeSchema_1.Parfume.find();
        res.status(201).send(parfumes);
    }
    catch (e) {
        console.error(e);
        res.status(500).send('Error occurred while fetching data');
    }
});
exports.default = {
    getAll,
};
