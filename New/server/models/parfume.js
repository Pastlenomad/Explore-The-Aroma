"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParfumeFactory = exports.Parfume = void 0;
const sequelize_1 = require("sequelize");
class Parfume extends sequelize_1.Model {
}
exports.Parfume = Parfume;
function ParfumeFactory(sequelize) {
    Parfume.init({
        name: {
            type: sequelize_1.DataTypes.STRING,
        },
        perfumeName: {
            type: sequelize_1.DataTypes.STRING,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
        },
        url: {
            type: sequelize_1.DataTypes.STRING,
        },
        noteUrl: {
            type: sequelize_1.DataTypes.STRING,
        },
        heartNoteUrl: {
            type: sequelize_1.DataTypes.STRING,
        },
        baseNoteUrl: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        tableName: "parfumelist",
        sequelize, // passing the `sequelize` instance is required
    });
    return Parfume;
}
exports.ParfumeFactory = ParfumeFactory;
