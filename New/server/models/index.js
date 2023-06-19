"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const parfume_1 = require("./parfume");
const parfumeList_1 = require("./parfumeList");
const sequelize = new sequelize_1.Sequelize("parfumelist", "admin", "admin", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
const Parfume = (0, parfume_1.ParfumeFactory)(sequelize);
function parfumeDataToDB() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield Promise.all(
        parfumeList_1.parfumeList.map((data) => Parfume.create(data))
      );
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  });
}
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield sequelize.authenticate();
      console.log("Connection has been established successfully.");
      yield parfumeDataToDB();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });
}
main();
