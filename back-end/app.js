import express from 'express';
import morgan from 'morgan';
import setRoutes from './routes/blog-routes';
import decodeToken from './controllers/decode-token';
import cors from 'cors';

const app = express();

// middleware:
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(decodeToken);

setRoutes(app);
app.listen(3001);