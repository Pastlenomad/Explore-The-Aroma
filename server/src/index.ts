'use strict';
import createServer from "./serverFunction";
const app = createServer();

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
