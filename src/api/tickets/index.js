// @flow
import ResourceBase from '../resourceBase';

export default class Tickets extends ResourceBase {

    getCustomerTickets(params: TicketParams): Promise<any> {
        const request: AxiosXHRConfig<TicketParams> = {
            url: '/v1/tickets/my_list',
            data: params
        };
        return this.dispatch(request);
    }
}

// alternate way to do it
// export default class Tickets {
//     constructor(client: Axios) {
//         this.client = client;
//     }
//     client: Axios;
//     getCustomerTickets(): Promise<AxiosXHR<Object>> {
//         return this.client.get('/v1/tickets/my_list');
//     }
// }
