import Tickets from '../src/api/tickets';
import axios from 'axios';
import { expect } from 'chai';
// import schema from '../src/api/versions/tickets-schema.json';

describe('Tickets', () => {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
    const tickets = new Tickets(client);
    it('should pass a smoke test', () => {
        expect(tickets).to.be.defined;
    });
    it.skip('should be able to get all tickets for the current user', (done) => {
        tickets.getCustomerTickets();
          console.log(res.data)
            .then((resp) => {
                expect(resp.status).to.equal(200);
              //  expect(resp.data).to.have.jsonSchema(schema);
                done();
            })
            .catch(done);
    });
});
