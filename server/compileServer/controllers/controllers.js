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
import { Parfume } from '../models/schemas/parfumeSchema.js';
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parfumes = yield Parfume.find();
        console.log(parfumes)
        res.status(201).json(parfumes);
    }
    catch (e) {
        console.error(e);
        res.status(500).send('Error occurred while fetching data');
    }
});
export default {
    getAll,
};
