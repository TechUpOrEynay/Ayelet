import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { User } from '../models/user.type'
@Injectable()
export class UserService {
    constructor(private http: Http) {
    }
    getUsers() {
        return this.http.get(`http://localhost:4222/api/Users/GetUsers`)
        //.toPromise().then(x =>{return x.json()});
            .map(response => response.json() as User[]).toPromise();
    }
}