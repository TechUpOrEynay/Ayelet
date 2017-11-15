import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../models/project.type';

export interface ConfirmModel {
  project: Project;
}

@Component({
  selector: 'editDialog',
  templateUrl: 'editDialog.component.html',
  styleUrls: ['editDialog.component.css'],
})
export class EditDialogComponent extends DialogComponent<ConfirmModel, Project> implements ConfirmModel {
  project: Project;
  constructor(dialogService: DialogService, private projectsService: ProjectsService, ) {
    super(dialogService);
  }
  ngOnInit() {
   alert(this.project.name)
  }
  confirm() {
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.close();
    this.result = this.project;
  }
  cancel() {
    this.close();
  }
}

