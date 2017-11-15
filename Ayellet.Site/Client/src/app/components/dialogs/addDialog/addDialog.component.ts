
import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
//import { DonorsService } from '../../../services/donors.service';
import { Project } from '../../../models/project.type';

@Component({
    selector: 'addDialog',
    templateUrl: 'addDialog.component.html',
    styleUrls: ['addDialog.component.css'],
})
export class AddDialogComponent extends DialogComponent<null, Project> {
    project= new Project();
    constructor(dialogService: DialogService) {
        super(dialogService);
       // this.project = new Project();
    }

    confirm() {
        this.close();
      //  if (this.project.name && this.project.date)
            this.result = this.project;
      //  else alert("חובה למלאות שם פרויקט ותאריך");
    }
    cancel() {
        this.close();
    }


}