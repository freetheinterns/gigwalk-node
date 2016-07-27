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
