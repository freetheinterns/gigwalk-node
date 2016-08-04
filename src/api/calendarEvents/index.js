// @flow
import axios from 'axios';

type CalendarEvent = {
    summary: string,
    description: string,
    start: string,
    end: string,
    time_zone: string,
    event_type: 'TICKET_SCHEDULE'
}

/* type APIResponse<T> = CalendarData {
    meta: ,
    data: T,
    gw_api_response: Array<Object>,
}*/

export type Options = {
     baseURL: string,
     auth: string
}

export default class CalendarEvents {
    constructor({ auth, baseURL }: Options) {
        this.client = axios.create({
            baseURL,
            headers: {
                Authorization: auth
            }
        });
    }

    client: typeof axios;

    deleteCalendarEvent(calendar_event_ID: number): Promise<Object> {
        const URL: string = '/v1/calendar_events/${calendar_event_ID}';
        return this.client.delete(URL);
    }

    getCalendarEvent(calendar_event_ID: number): Promise<Objext> {
        const URL: string = '/v1/calendar_events/${calendar_event_ID}';
        return this.client.get(URL);
    }

    createCalendarEvent(): Promise<Object> {
        const URL: string = '/v1/calendar_events';
        // createCalendarEvent(event: CalendarEvent): Promise<$AxiosXHR<APIResponse<CalendarData>>> {
        // }
        return this.client.post(URL, { calendar_event: event });
    }

    getCustomerEvent(customer_id: number): Promise<Object> {
        const URL: string = '/v1/customers/${customer_id}/calendar_events';
        return this.client.get(URL);
    }
}
