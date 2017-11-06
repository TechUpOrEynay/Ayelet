import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project.type';
import {FormControl} from '@angular/forms';
import {ProjectsService} from '../../services/projects.service';
// import {ElementRef} from ''
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

private  projects: Project[] = [];
    projectCtrl: FormControl;
    public query = '';
    filteredProjects: any;
    public  selectedProject: Project;
    public filteredList = [];
    public elementRef; 
    constructor(private projectsService: ProjectsService ) {}
    ngOnInit(){  
     this.projectCtrl = new FormControl();
     this.projectsService.getProjects().then(project => {
            this.projects = project;
            this.filteredProjects = this.projectCtrl.valueChanges
            .startWith(null)
            .map(name => this.filter(name));
         });
    }
     filter(val: any) {
     return val && this.projects ? this.projects.filter(c => c.name.indexOf(val?val:val.name) === 0)
               : this.projects;
     }
     displayContact(project: Project): string {
       return project ? project.name : null;
    }
}
    // filter() 
    // {
    //     if (this.query !== "")
    //     {
    //         this.filteredList = this.contacts.filter(c =>{
    //             return c.fullName.indexOf(this.query) ===0;
    //         });
    //     }
    //     else
    //     {
    //         this.filteredList = [];
    //     }
    // }
 
    // select(item)
    // {
    //     this.query = item.fullName;
    //     this.selectedContact = item.fullName;
    //     this.filteredList = [];
    // }


