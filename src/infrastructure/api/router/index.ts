import { Router } from 'express'
import { Container } from "typedi";
import { GetCrawlersEndpoint } from '../controllers/crawlers/get-crawlers.controller'

export const ApiRouter = (): Router => {
    const apiRouter = Router();
    const crawlersRouters = Router();

    crawlersRouters.get('/crawlers', (res, req) =>
      Container.get(GetCrawlersEndpoint).invoke(res, req)
    );

    apiRouter.use('/api/v1', crawlersRouters);

    return apiRouter;
}
