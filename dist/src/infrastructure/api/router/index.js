"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouter = void 0;
const express_1 = require("express");
const typedi_1 = require("typedi");
const get_crawlers_controller_1 = require("../controllers/crawlers/get-crawlers.controller");
const ApiRouter = () => {
    const apiRouter = (0, express_1.Router)();
    const crawlersRouters = (0, express_1.Router)();
    crawlersRouters.get('/crawlers', (res, req) => typedi_1.Container.get(get_crawlers_controller_1.GetCrawlersEndpoint).invoke(res, req));
    apiRouter.use('/api/v1', crawlersRouters);
    return apiRouter;
};
exports.ApiRouter = ApiRouter;
