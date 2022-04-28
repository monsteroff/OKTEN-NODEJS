import 'reflect-metadata';
import path from 'path';
import express from 'express';
import { createConnection } from 'typeorm';
import { engine } from 'express-handlebars';
import cors from 'cors';

import { apiRoutes } from './routes/apiRoutes';

const app = express();

// Default setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// Engine setup
app.set('view engine', '.hbs');
app.engine('.hbs', engine({ defaultLayout: '' }));
app.set('views', path.join(__dirname, 'static'));

// Routes setup
app.use(apiRoutes);

// Server start
app.listen(1313, async () => {
    console.log('Server has started');
    try {
        const connection = await createConnection();
        if (connection) console.log('Database connected');
    } catch (err) {
        console.log(err);
    }
});
