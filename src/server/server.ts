import * as express from 'express';
import * as path from 'path';
import routes from './routes';
// import cors from 'cors';

const app = express();

let p = path.join(__dirname, '../public');
console.log(p);

// app.use(cors());
app.use(express.static(p));
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3011;
app.listen(port, () => console.log(`Server listening on port: ${port}`));