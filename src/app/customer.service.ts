import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' 
})
export class CustomerService {

    constructor() { }

    getCustomerInfoFromWebService() {

        const customerFromWeb = [
            {
                firstName: 'Spongebob'
                , lastName: 'Squarepants'
                , streetAddress: '124 Conch St.'
                , city: 'Bikini Bottom'
                , state: 'Hawaii'
                , zipCode: '54321'
                , phoneNumber: 333-214-9000
            }

            , {
                firstName: 'Patrick'
                , lastName: 'Star'
                , streetAddress: '120 Conch St.'
                , city: 'Bikini Bottom'
                , state: 'Hawaii'
                , zipCode: '54321'
                , phoneNumber: 333-214-9001
            }

            , {
                firstName: 'Eugene'
                , lastName: 'Krabs'
                , streetAddress: '3541 Anchor Way'
                , city: 'Bikini Bottom'
                , state: 'Hawaii'
                , zipCode: '54322'
                , phoneNumber: 333-215-9111
            }
        ];

        return customerFromWeb;

    }
}