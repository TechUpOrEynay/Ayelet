import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ProjectFullDatials } from '../../../models/projectFullDtialc.type';
import { ProjectInterested } from '../../../models/projectInterested.type';
import { ProjectsService } from '../../../services/projects.service';
/**
 * @title Dialog Overview
 */
export interface ConfirmModel {
    selectedProjectD: ProjectFullDatials;
    selectedProjectI: ProjectInterested;
    active: number;
    selectedRow: number;
}

@Component({
    selector: 'addContactDialog',
    templateUrl: 'addContactDialog.component.html',
    styleUrls: ['addContactDialog.component.css'],
})
export class AddContactDialogComponent extends DialogComponent<ConfirmModel, ProjectFullDatials> implements ConfirmModel {
    active: number;
    selectedProjectD: ProjectFullDatials;
    selectedProjectI: ProjectInterested;
    nameActive: string;
    selectedRow: number;
    constructor(dialogService: DialogService, private projectsService: ProjectsService, ) {
        super(dialogService);
    }
    ngOnInit() {
        if (this.selectedProjectD != null) {
            alert(this.selectedProjectD.nameProject)
            this.nameOfActive();
        }
        if (this.selectedProjectI != null) {
            alert(this.selectedProjectI.nameProject)
            this.nameOfActive();
        }

    }
    nameOfActive() {
        switch (this.active) {
            case 1: {
                this.nameActive = "לעדכן";
                break;
            }
            case 2: {
                this.nameActive = 'להוסיף';
                break;
            }
            case 3: {
                this.nameActive = 'למחוק';
                break;
            }

        }
    }
    confirm() {
        this.close();
        //  if (this.project.name && this.project.date)
        this.result = this.selectedProjectD;
        //  else alert("חובה למלאות שם פרויקט ותאריך");
    }
    cancel() {
        this.close();

    }


    // this.project = new Project();




}
