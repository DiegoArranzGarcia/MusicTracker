// import { IActivityRepository } from '../../../domain/model/activity/IActivityRepository';

import { GetCrawlersQuery } from './get-crawlers.query'
import { CrawlersDto, GetCrawlersResponse } from './get-crawlers.response'
import { Service } from "typedi";

@Service()
export class GetCrawlersQueryHandler {
    public handle(query: GetCrawlersQuery): GetCrawlersResponse {
        return <GetCrawlersResponse>(<GetCrawlersQuery>[
            <CrawlersDto>{
                name: 'Spotify',
            },
            <CrawlersDto>{
                name: 'Spinning Recordings',
            },
            <CrawlersDto>{
                name: 'Revealed',
            }
        ])
    }
}
