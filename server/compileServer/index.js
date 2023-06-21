'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serverFunction_1 = __importDefault(require("./serverFunction"));
const app = (0, serverFunction_1.default)();
app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
