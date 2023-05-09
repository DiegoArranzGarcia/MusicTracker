import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { GetCrawlersEndpoint } from './src/infrastructure/api/controllers';
import { GetCrawlersQueryHandler } from './src/application/crawlers/get-crawlers/get-crawlers.handler';
import { ApiRouter } from './src/infrastructure/api/router';

dotenv.config();

const app : Express = express();
const port = process.env.PORT;

const router = ApiRouter();
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});