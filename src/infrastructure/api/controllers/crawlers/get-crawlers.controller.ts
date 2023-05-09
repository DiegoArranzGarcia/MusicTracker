import { Request, Response } from 'express'
import { GetCrawlersQueryHandler } from '../../../../application/crawlers/get-crawlers/get-crawlers.handler'
import { Service, Inject } from 'typedi';

@Service()
export class GetCrawlersEndpoint {

    @Inject()
    getCrawlerQueryHandler: GetCrawlersQueryHandler;    

    // public validate = [body().notEmpty(), RequestValidator]dep

    public async invoke(req: Request, res: Response) {
        var crawlers = this.getCrawlerQueryHandler.handle({});
        return res.json(crawlers).status(200);
    }
}
