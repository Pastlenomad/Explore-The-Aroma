'use strict';
import express from 'express';
import cors from 'cors';
import router from './router.js';
const app = express();
app.use(router);
app.use(express.json());
app.use(cors());
app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
