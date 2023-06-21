'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parfume = void 0;
const index_1 = __importDefault(require("../index"));
const ParfumeSchema = new index_1.default.Schema({
    name: {
        type: String, required: true
    },
    perfumeName: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    url: {
        type: String, required: true
    },
    noteUrl: {
        type: String, required: true
    },
    heartNoteUrl: {
        type: String, required: true
    },
    baseNoteUrl: {
        type: String, required: true
    }
});
const Parfume = index_1.default.model('Parfume', ParfumeSchema);
exports.Parfume = Parfume;
