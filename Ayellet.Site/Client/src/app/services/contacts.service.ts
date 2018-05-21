import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ProjectFullDatials } from '../models/projectFullDtialc.type';
import { ProjectInterested } from '../models/projectInterested.type';
import 'rxjs/Rx';
import { Contact } from '../models/contact.type';
import { Area } from '../models/area.type';
import { Location } from '../models/location.type';
import { RelatedPerson } from '../models/relatedPerson.type';
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
    updateServiceDetailes(contact: Contact) {
        return this.http.post(`http://localhost:4222/api/Contacts/UpdateContactDetailes`, contact)
            .map(response => response.json() as Boolean)
            .toPromise();
    }
    getProjectsByIdContact(id: number) {
        return this.http.get(`http://localhost:4222/api/Contacts/getProjectsByIdContact/${id}`)
            .map(response => response.json() as ProjectFullDatials[]).toPromise();
    }
    getListArea() {
        return this.http.get('http://localhost:4222/api/Contacts/GetAreas')
            .map(response => response.json() as Area[])
            .toPromise();
    }
    creatNewProjectVolanteer(modelProjectVolunteer: ProjectFullDatials) {
        return this.http.post(`http://localhost:4222/api/Contacts/createNewProjectVolunteerDetials`, modelProjectVolunteer)
            .map(response => response.json() as Boolean)
            .toPromise();
    }
    deleteProjectVolunteer(varModelProjectV: ProjectFullDatials) {
        return this.http.post(`http://localhost:4222/api/Contacts/deleteProjectVolunteer`, varModelProjectV)
            .map(response => response.json() as Boolean).toPromise();
    }
    getProjectsInterestedByIdContact(id: number) {
        return this.http.get(`http://localhost:4222/api/Contacts/getProjectsInterestedByIdContact/${id}`)
            .map(response => response.json() as ProjectInterested[]).toPromise();
    }
    updateProjectvolunteer(modelProjectVolunteer: ProjectFullDatials) {
        return this.http.post(`http://localhost:4222/api/Contacts/updateProjectVolunteerDetials`, modelProjectVolunteer)
            .map(response => response.json() as Boolean)
            .toPromise();
    }
    createNewContact(contact: Contact) {
        return this.http.post(`http://localhost:4222/api/Contacts/createNewContact`, contact)
            .map(response => response.json() as number)
            .toPromise();
    }
    getLocations() {
        return this.http.get('http://localhost:4222/api/Contacts/getLocations')
            .map(response => response.json() as Location[])
            .toPromise();
    }
    getLocationById(id: number) {
        return this.http.get(`http://localhost:4222/api/Contacts/getLocationById/${id}`)
            .map(response => response.json() as Location)
            .toPromise();
    }
    getRelatedPerson() {
        return this.http.get('http://localhost:4222/api/Contacts/getRelatedPerson')
            .map(response => response.json() as RelatedPerson[])
            .toPromise();
    }
    getRelatedPersonById(id: number) {
        return this.http.get(`http://localhost:4222/api/Contacts/getRelatedPersonById/${id}`)
            .map(response => response.json() as RelatedPerson)
            .toPromise();
    }
    updateProjectDetiales(modelInterstedDetails: ProjectInterested) {
        return this.http.post(`http://localhost:4222/api/Contacts/updateProjectDetiales`, modelInterstedDetails)
            .map(response => response.json() as Boolean)
            .toPromise();
    }
}
