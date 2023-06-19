'use strict';
import db from "../index.js";
const ParfumeSchema = new db.Schema({
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
const Parfume = db.model('Parfume', ParfumeSchema);
export { Parfume };
