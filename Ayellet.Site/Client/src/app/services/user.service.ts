import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { User } from '../models/user.type'
@Injectable()
export class UserService {
    constructor(private http: Http) {
    }
    login(user: User) {
        return this.http.get(`http://localhost:4222/api/Users/Login?userName=${user.userName}&password=${user.password}`)
        //.toPromise().then(x =>{return x.json()});
            .map(response => response.json() as boolean[])
           .toPromise();
    }
}