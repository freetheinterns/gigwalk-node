import CalendarEvents from '../src/api/calendarEvents';
import { expect } from 'chai';

describe('CalendarEvents', () => {
    const calendarEvents = new CalendarEvents({
        baseURL,
        auth: token
    });
    let customerID : number = 1;

    it('should pass a smoke test', () => {
        expect(calendarEvents).to.be.defined;
    });
    it('should be able to post new calendar events', () => {
        calendarEvents.createCalendarEvent({
            calendarEvents: [
                {
                    summary: 'test summary',
                    description: 'test description',
                    start: 'test start date',
                    end: 'test end date',
                    time_zone: 'test time zone', // this should probably be specific
                    event_type: 'TICKET_SCHEDULE'
                }
            ]
        })
        .then((resp) => {
            console.log(resp.data);
        });
    });
});
