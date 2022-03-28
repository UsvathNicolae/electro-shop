import express, {Request, Response , Application} from 'express';
import logging from "./logging";
import config from './config';
import * as bodyParser from 'body-parser';
import cors from 'cors';

const app: Application = express();

const NAMESPACE : string = 'Server';

app.use(function (req: Request, res: Response, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('*', (req, res) => res.status(404).json({message: "Pagina nu a fost gasita"}));

app.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`))

export default app;