import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project.type'
import { RequestOptions } from '@angular/http';
import { ProjectFullDatials } from '../models/projectFullDtialc.type';

@Injectable()
export class ProjectsService {
    constructor(private http: Http) {
    }
    getProjects() {
        return this.http.get('http://localhost:4222/api/Projects/GetProjects')
            .map(response => response.json() as Project[])
            .toPromise();
    }
    getProject(id: number) {
        return this.http.get(`http://localhost:4222/api/Projects/GetProjectById/${id}`)
            .map(response => response.json() as Project)
            .toPromise();
    }
    updateServiceDetailes(project: Project) {
        return this.http.post(`http://localhost:4222/api/Projects/UpdateProjectDetailes`, project)
            .map(response => response.json() as Boolean)
            .toPromise();
    }
    createNewProject(project: Project) {
        return this.http.post(`http://localhost:4222/api/Projects/createNewProject`, project)
            .map(response => response.json() as number)
            .toPromise();
    }
    deleteProject(id: number) {
        return this.http.get(`http://localhost:4222/api/Projects/deleteProject/${id}`)
            .map(response => response.json() as boolean)
            .toPromise();
    }
    getProjectByIdContact(id: number) {
        return this.http.get(`http://localhost:4222/api/Projects/getProjectByIdContact/${id}`)
            .map(response => response.json() as Project[]).toPromise();
    }
    GetInteresting() {
        return this.http.get('http://localhost:4222/api/Projects/GetProjectsIntersted')
            .map(response => response.json())
            .toPromise();
    }
    GetVolunteers() {
        return this.http.get('http://localhost:4222/api/Projects/GetProjectsVolunteers')
            .map(response => response.json())
            .toPromise();
    }
    createIntersting(projectId: number, contactId: number, Details: string) {
        let newInteresting: any = {};
        //newInteresting.ID = 6;
        newInteresting.ContactID = contactId;
        newInteresting.ProjectID = projectId;
        newInteresting.Details = Details;
        newInteresting.IsActive = true;
        let body = JSON.stringify(newInteresting);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions();
        return this.http.post(`http://localhost:4222/api/Projects/addInteresting`, newInteresting)
            .map(response => response.json())
            .toPromise();
    }


    createVolunteer(projectId: number, contactId: number, Details: string) {
        let newVolunteer: any = {};
        //newInteresting.ID = 6;
        newVolunteer.ContactID = contactId;
        newVolunteer.ProjectID = projectId;
        newVolunteer.Details = Details;
        newVolunteer.IsActive = true;
        let body = JSON.stringify(newVolunteer);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions();
        return this.http.post(`http://localhost:4222/api/Projects/addVolunteer`, newVolunteer)
            .map(response => response.json())
            .toPromise();
    }
    addNewEmbedProject(embedProject: any) {
        return this.http.post('http://localhost:4222/api/Projects/embProject', embedProject)
            .map(response => response.json() as boolean)
            .toPromise();
    }
    getLocationNameById(id: number) {
        return this.http.get(`http://localhost:4222/api/Projects/getLocationNameById/${id}`)
            .map(response => response.json() as string)
            .toPromise();
    }
    getProjectInterstedNotEmbed(id:number){
        return this.http.get(`http://localhost:4222/api/Projects/getProjectInterstedNotEmbed/${id}`)
        .map(response => response.json())
        .toPromise();
    } 
    getProjectVolunteersNotEmbed(id:number){
        return this.http.get(`http://localhost:4222/api/Projects/getProjectVolunteersNotEmbed/${id}`)
        .map(response => response.json())
        .toPromise();
    } 
    
}