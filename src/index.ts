import * as bodyParser from 'body-parser';
import "reflect-metadata";
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

// declare metadata by @controller annotation
import "./controllers/usercontroller";

// set up container
const container = new Container();

// set up bindings
// container.bind<FooService>('FooService').to(FooService);

// create server
const server = new InversifyExpressServer(container);

const app = server.build();
app.listen(3000);