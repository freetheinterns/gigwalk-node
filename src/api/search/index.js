// @flow
import Resource from '../resource';
import type { $AxiosXHR, $AxiosXHRConfig } from 'axios';

type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
}

type APIPromise<T> = Promise<$AxiosXHR<APIRes<T>>>

type SearchDocumentsParams = {
    query_string: string
}

type SearchOrganizationParams = {
    organization_id: number,
    index_type: string,
    query_string: string
}

type searchResultsSchema = {
    _shards: {
        successful: number,
        total: number,
        failed: number
    },
    hits: {
        total: number,
        max_score: number,
        hits: Array<{
            _source: Object,
            _score: number,
            _type: string,
            _id: number,
            _index: string,
            highlight?: Object
        }>
    },
    took: number,
    timed_out: boolean
}

type SearchDocumentsData = [
    searchResultsSchema
]

type CreateSearchData = [
    string
]

type SearchOrganizationData = [
    searchResultsSchema
]

export default class Search extends Resource {
    /**
     * @api {} GET /v1/search
     * @apiName searchDocuments
     * @apiDescription ES Search for the given query_string This searches all the ES docs for the given query_string and returns results in ES idiom. Unused?
     * @apiExample {js} Example:
     *             gigwalk.customers.searchDocuments({...})
     */
    searchDocuments(params: SearchDocumentsParams): APIPromise<SearchDocumentsData> {
        const request: $AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.client.request(request);
    }

    /**
     * @api {} POST /v1/search
     * @apiName createSearch
     * @apiDescription Not implemented
     * @apiExample {js} Example:
     *             gigwalk.customers.createSearch({...})
     */
    createSearch(): APIPromise<CreateSearchData> {
        const request: $AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.client.request(request);
    }

    /**
     * @api {} GET /v1/organizations/{organization_id}/search/{index_type}
     * @apiName searchOrganization
     * @apiDescription We can search in groups, members, location_lists, target_lists, tickets or subscriptions filtered by the org
     * @apiParam {Number} organization_id
     * @apiParam {String} index_type
     * @apiExample {js} Example:
     *             gigwalk.customers.searchOrganization({...})
     */
    searchOrganization(params: SearchOrganizationParams): APIPromise<SearchOrganizationData> {
        const request: $AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.client.request(request);
    }
}
