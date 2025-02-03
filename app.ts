import express from 'express';
import numberRoutes from './routes/number.route';
import { errorHandler } from './middlewares/error.middleware';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', numberRoutes);

app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});