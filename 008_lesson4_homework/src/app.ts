import express, { Request, Response } from 'express';
import { users } from './users';

const app = express();
console.log(users);

app.get('/', (req: Request, res: Response) => {
    res.end();
});

app.listen(9000, () => {
    console.log('Server started!!!!');
});
