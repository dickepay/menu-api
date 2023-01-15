"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
// declare metadata by @controller annotation
require("../temp/dist/controllers/usercontroller");
// set up container
const container = new inversify_1.Container();
// set up bindings
// container.bind<FooService>('FooService').to(FooService);
// create server
const server = new inversify_express_utils_1.InversifyExpressServer(container);
const app = server.build();
app.listen(3000);
//# sourceMappingURL=index.js.map