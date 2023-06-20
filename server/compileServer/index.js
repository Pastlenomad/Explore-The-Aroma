import express from 'express';
import cors from 'cors';
import router from './router';
import compression from 'compression';

const app = express();
app.use(cors());
app.use(compression());

app.use(router)

app.use(express.json());

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
