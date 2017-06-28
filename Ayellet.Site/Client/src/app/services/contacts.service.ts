import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import {Contact} from '../models/contact.type'


@Injectable()
export class ContactsService {
    constructor(private http: Http) {

    }

    getContacts() {
        return this.http.get('http://localhost:4222/api/Contacts/GetContacts')
            .map(response => response.json() as Contact[])
            .toPromise();
    }
    getContact(id: number) {
        return this.http.get(`http://localhost:4222/api/Contacts/GetContactDetail/${id}`) 
            .map(response => response.json() as Contact)
            .toPromise();
    }

}
