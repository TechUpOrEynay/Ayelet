import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Project } from '../models/project.type'


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
}