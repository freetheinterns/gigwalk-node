// @flow
import ResourceBase from '../resourceBase';

type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
}

type APIPromise<T> = Promise<AxiosXHR<APIRes<T>>>

type CustomerTemplate = {
  email: string,
  first_name: string,
  last_name: string,
  photo_url: string,
  address_line_1: string,
  address_line_2: string,
  phonenumber: string,
  customer_status: string,
  max_hours_week: number,
  ideal_hours_week: number,
  home_latitude: number,
  home_longitude: number,
  certifications: Array<number>
}

type DeleteCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string
}

type GetCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string
}

type UpdateCustomerWithEmailParams = {
    organization_id: number,
    customer_email: string,
    customer: CustomerTemplate
}

type DeleteCustomerWithIDParams = {
    organization_id: number,
    customer_id: number
}

type GetCustomerWithIDParams = {
    organization_id: number,
    customer_id: number
}

type UpdateCustomerWithIDParams = {
    organization_id: number,
    customer_id: number,
    customer: CustomerTemplate
}

type GetOrganizationCustomersParams = {
    organization_id: number
}

type UpdateOrganizationCustomersParams = {
    organization_id: number,
    action: string,
    customers: Array<CustomerTemplate>
}

type UpdateCustomerParams = {
    customer: CustomerTemplate
}

type SearchCustomersParams = {
  ticket_ids: Array<number>
}

export default class Customers extends ResourceBase {
    /**
     * @api {delete} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName deleteCustomerWithEmail
     * @apiDescription The actual customers are not deleted but only their metadata is. The customer status is set to DELETED.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteCustomerWithEmail({...})
     */
    deleteCustomerWithEmail(params: DeleteCustomerWithEmailParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName getCustomerWithEmail
     * @apiDescription If the customer exists, then return info about the specified customer.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomerWithEmail({...})
     */
    getCustomerWithEmail(params: GetCustomerWithEmailParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers/{customer_email}
     * @apiName updateCustomer
     * @apiDescription Modifies the info of the customer identified by the customer_email.
     * @apiParam {Number} organization_id
     * @apiParam {String} customer_email
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomer({...})
     */
    updateCustomerWithEmail(params: UpdateCustomerWithEmailParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {delete} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName deleteCustomerWithID
     * @apiDescription The actual customers are not deleted but only their metadata is. The customer status is set to DELETED.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.deleteCustomerWithID({...})
     */
    deleteCustomerWithID(params: DeleteCustomerWithIDParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'delete'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName getCustomerWithID
     * @apiDescription If the customer exists, then return info about the specified customer.
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomerWithID({...})
     */
    getCustomerWithID(params: GetCustomerWithIDParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers/{customer_id}
     * @apiName updateCustomerWithID
     * @apiDescription Modifies the info of the customer identified by the customer_id
     * @apiParam {Number} organization_id
     * @apiParam {Number} customer_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomerWithID({...})
     */
    updateCustomerWithID(params: UpdateCustomerWithIDParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/organizations/{organization_id}/customers
     * @apiName getOrganizationCustomers
     * @apiDescription Return info about all customers of the organization
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.getOrganizationCustomers({...})
     */
    getOrganizationCustomers(params: GetOrganizationCustomersParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/organizations/{organization_id}/customers
     * @apiName updateOrganizationCustomers
     * @apiDescription Modifies the info of multiple customers identified by the customer_email. Delete multiple customers (by setting DELETED status)
     * @apiParam {Number} organization_id
     * @apiExample {js} Example:
     *             gigwalk.customers.updateOrganizationCustomers({...})
     */
    updateOrganizationCustomers(params: UpdateOrganizationCustomersParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {get} /v1/customer
     * @apiName getCustomer
     * @apiDescription Return current customer's info Shortcut for returning OrgCustomerAPIResource with current_user's org_id and current user's id as
                       the customer_id. Returns (id, first_name, last_name, photo_url, address_line_1 and 2, phonenumber, email, role, customer_status,
                       org, group_memberships, metadata, max/ideal_hours_week, home_lat/long, auth_token)
     * @apiExample {js} Example:
     *             gigwalk.customers.getCustomer({...})
     */
    getCustomer(): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'get'
        };
        return this.dispatch(request);
    }

    /**
     * @api {put} /v1/customer
     * @apiName updateCustomer
     * @apiDescription Modify current_user's info Shortcut for the put method of OrgCustomerAPIResource with current_user's org_id and current user's id
                       as the customer_id.
     * @apiExample {js} Example:
     *             gigwalk.customers.updateCustomer({...})
     */
    updateCustomer(params: UpdateCustomerParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'put'
        };
        return this.dispatch(request);
    }

    /**
     * @api {post} /v1/tickets/search/customers
     * @apiName searchCustomers
     * @apiDescription Return all the customers related with the given groups or with the groups related with the tickets Also checks if the customers
                       have availability and capacity to execute the given tickets
     * @apiExample {js} Example:
     *             gigwalk.customers.searchCustomers({...})
     */
    searchCustomers(params: SearchCustomersParams): APIPromise<any> {
        const request: AxiosXHRConfig<any> = {
            url: `/v1`,
            method: 'post'
        };
        return this.dispatch(request);
    }
}
