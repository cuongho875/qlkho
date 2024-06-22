import express, { Request, Response } from 'express';
import apiRoute from './routes/api';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())
app.use('/api',apiRoute)
// app.get('/',(req)=>{
//   console.log(req)
// })
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });