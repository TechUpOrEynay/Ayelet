import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.type';
import { FormControl } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { EditDialogComponent } from '../dialogs/editDialog/editDialog.component';
import { AddDialogComponent } from '../dialogs/addDialog/addDialog.component';
import { DialogService } from "ng2-bootstrap-modal";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    private projects: Project[] = [];
    projectCtrl: FormControl;
    filteredProjects: any;
    public selectedProject: Project;
    public elementRef;
    constructor(private projectsService: ProjectsService, public dialog: MatDialog, private dialogService: DialogService) {
        this.selectedProject = new Project;
    }
    ngOnInit() {
        this.projectCtrl = new FormControl();
        this.projectsService.getProjects().then(project => {
            this.projects = project;
            this.filteredProjects = this.projectCtrl.valueChanges
                .startWith(null)
                .map(name => this.filter(name));
        });
    }
    filter(val: any) {
        return val && this.projects ? this.projects.filter(c => c.name.indexOf(val ? val : val.name) === 0)
            : this.projects;
    }
    displayProject(project: Project): string {
        return project ? project.name : null;
    }
    showEditDialog() {
        let disposable = this.dialogService.addDialog(EditDialogComponent, {
            project: this.selectedProject,
        }, { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((result) => {
                //We get dialog result
                if (result) {
                    this.projectsService.updateServiceDetailes(result).then(x => {
                        if (x) {
                            var fromdb = this.projects.find(x => x.id == result.id);
                            this.displayProject(fromdb);
                            this.selectedProject = result;
                        }
                    });
                }
            });
    }
    showAddDialog() {
        let disposable = this.dialogService.addDialog(AddDialogComponent
            , { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((result) => {
                //We get dialog result
                if (result) {
                    this.projectsService.createNewProject(result).then(x => {
                        if (x) {
                            result.id = x;
                            this.projects.push(result);
                            this.selectedProject = result;
                        }
                    })
                }
            });
    }
    deleteDonor() {
        this.projectsService.deleteProject(this.selectedProject.id)
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


