"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("./controllers/controllers"));
const router = (0, express_1.Router)();
router.get("/parfumes", controllers_1.default.getAll);
exports.default = router;

//TODO:
/*

const router = require('express').Router();
const userController = require('./controllers/user');
const authMiddleware = require('./middlewares/auth');

// add the paths for register, login, me, and logout here

// REMOVE-START
router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/me', authMiddleware, userController.profile);
router.post('/logout', authMiddleware, userController.logout);
// REMOVE-END

module.exports = router;

*/