import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, next } from "inversify-express-utils";
import { injectable, inject } from "inversify";

@controller("/user")
export class UserController {
    @httpGet("/")
    private index(@request() req: express.Request, @response() res: express.Response, @next() nxt: express.NextFunction): string {
        return 'Hello Twat!'
    }
}