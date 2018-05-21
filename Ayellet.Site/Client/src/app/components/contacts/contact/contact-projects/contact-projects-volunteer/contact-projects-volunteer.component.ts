import { Component, OnInit, Input, VERSION, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { DialogService } from "ng2-bootstrap-modal";
import { Contact } from '../../../../../models/contact.type';
import { Area } from '../../../../../models/area.type';
import { Project } from '../../../../../models/project.type';
import { ProjectFullDatials } from '../../../../../models/projectFullDtialc.type';
import { FormControl } from '@angular/forms';
import { ContactsService } from '../../../../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { AddContactDialogComponent } from '../../../../dialogs/addContactDialog/addContactDialog.component';
import { ProjectsService } from '../../../../../services/projects.service';
import { AccordionModule } from "ngx-accordion";
import { RTL } from '@progress/kendo-angular-l10n';
import { MatSelectModule } from '@angular/material/select';
import { ContactProjectsInterstingComponent } from './../contact-projects-intersting/contact-projects-intersting.component';
import { ContactProjectsComponent } from '../../contact-projects/contact-projects.component'
@Component({
    selector: 'contact-projects-volunteer',
    templateUrl: './contact-projects-volunteer.component.html',
    styleUrls: ['contact-projects-volunteer.component.css']
})

export class ContactProjectsVolunteerComponent implements OnInit {
    private currentcontact: any;
    private contactId: number;
    private projects: ProjectFullDatials[] = [];
    private currentContact: Contact;
    private currentIsActive: boolean;
    private selectedRow: Number = -1;
    private newProject: ProjectFullDatials = new ProjectFullDatials();
    private flagAddition: boolean;
    private lengthArrry: number;
    private listArea: Area[] = [];
    private selectedArea: Area;
    private selectedProject: ProjectFullDatials;
    private flag: string;
    private status: number;
    public fileName: string = "projects.xlsx";
    private editAnswer: any;
    private listProjects: Project[] = [];
    private currentProject: Project;
    private dateCurrentProject: Date = new Date(2015, 9, 8, 0, 0, 0);
    constructor(private route: ActivatedRoute, private contactsService: ContactsService,
        public dialog: MatDialog, private dialogService: DialogService, private projectService: ProjectsService) {

    }


    ngOnInit() {
        this.currentcontact = this.route.params
            .subscribe(params => {
                console.log('params');
                this.contactId = params['currentContact'];
                this.GetProjectsById(this.contactId);
                this.status = 0;
            });
        //this.GetDetialCurrentContact(this.contactId);
        //if (this.currentContact.isVolunteer) {

        //}
        this.newProject.details = "fgfg";
        this.currentIsActive = true;
        this.flagAddition = false;
        this.getListProjects();

        // this.selectedArea = this.listArea[1];
    }

    GetProjectsById(contactId: number) {
        this.contactsService.getProjectsByIdContact(contactId).then(project => {
            console.log('project');
            this.projects = project;
            // this.getValuesToNewProject();
        });
    }
    getValuesToNewProject() {
        this.newProject = this.projects[1];
    }
    onChangeArea(newObj) {
        this.selectedArea = newObj;
        this.newProject.idArea = this.selectedArea.id;
        this.newProject.nameArea = this.selectedArea.name;
    }
    onChangeProject(newObj) {

        this.currentProject = newObj;
        this.newProject.idPoject = this.currentProject.id;
        this.newProject.nameProject = this.currentProject.name;
        for (var i = 0; i < this.listProjects.length; i++) {
            if (this.listProjects[i].id == this.currentProject.id) {
                this.newProject.date = this.listProjects[i].date;
                this.newProject.details = this.listProjects[i].details;
                //this.dateCurrentProject = this.newProject.date;
            }
        }
    }
    GetDetialCurrentContact(contactId: number) {
        this.contactsService.getContact(contactId).then(contact => {
            this.currentContact = contact;
        });
    }
    GetListArea() {
        this.contactsService.getListArea().then(area => {
            this.listArea = area;
        });
    }
    getListProjects() {
        this.projectService.getProjects().then(projects => {
            this.listProjects = projects;
        });
    }
    ngOnDestroy() {
        this.currentcontact.unsubscribe();

    };

    EditRow() {
        this.currentIsActive = false;
        this.status = 1;
    }
    AddRow() {
        this.lengthArrry = this.projects.length;
        this.currentIsActive = false;
        //this.newProject = this.projects[1];
        this.flagAddition = true;
        this.GetListArea();
        this.status = 2;
        //this.showAddDialog();

    }
    deleteRow() {
        //if (this.selectedRow >= 0) {

        //}
        this.status = 3;
    }
    showAddDialog() {
        if (this.status == 2) {
            this.selectedProject = this.newProject;

        }

        let disposable = this.dialogService.addDialog(AddContactDialogComponent, {
            selectedProjectD: this.selectedProject,
            active: this.status,
            selectedRow: this.selectedRow,
        }, { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((result) => {
                //We get dialog result
                if (result) {

                    if (this.validateRow()) {
                        if (this.status == 2) {
                            this.newProject.idProjectVolunteer = -1;
                            this.contactsService.creatNewProjectVolanteer(this.newProject).then(answer => {
                                this.editAnswer = answer;
                                if (this.editAnswer) {
                                    alert("השורה נשמרה בהצלחה במערכת!!!");
                                    window.location.reload();
                                }
                            });
                        } else
                            if (this.status == 1) {
                                this.contactsService.updateProjectvolunteer(this.selectedProject).then(answer => {
                                    this.editAnswer = answer;
                                    if (this.editAnswer) {
                                        alert("עודכן בהצלחה");
                                        window.location.reload();
                                    }
                                    else {
                                        alert("לא עודכן בהצלחה!!!");
                                        window.location.reload();
                                    }
                                });
                            }
                            else
                                if (this.status == 3) {

                                    this.contactsService.deleteProjectVolunteer(this.selectedProject).then(answer => {
                                        this.editAnswer = answer;
                                        if (this.editAnswer) {
                                            alert("נמחק בהצלחה מהמערכת");
                                            window.location.reload();
                                        }
                                        else {
                                            alert("המערכת נכשלה במחיקת השורה");
                                        }

                                    });
                                }
                    }
                    else {
                        alert("אחד השדות ריקים נא מלא את כל הפרטים!!!");
                    }
                }
                else
                    if (!result) {
                        window.location.reload();
                    }
            });
    }

    // });


    validateRow(): boolean {
        if (this.status == 2) {
            if (this.validateNewRow()) {
                return true;
            }
        }
        else {
            if (this.selectedProject.date != null && this.selectedProject.details != '' && this.selectedProject.nameArea != '' && this.selectedProject.roleVolunteer != '') {
                return true;
            }
        }
        alert('כישלון עידכון')
        return false;
    }
    validateNewRow(): boolean {
        if (this.newProject.date == null || this.newProject.details == '' || this.newProject.nameArea == '' || this.newProject.roleVolunteer == '') {
            alert('חדש עידכון')
            return false;
        }
        return true;
    }

    onRowClick(event, id) {
        console.log(event.target.outerText, id);
    }

    setClickedRow(index: number) {
        this.selectedRow = index;
        this.selectedProject = this.projects[index];
    }
    setClickedNewRow() {
        // this.currentIsActive = true;
        this.selectedRow = this.lengthArrry;
    }
    public save(component): void {
        const options = component.workbookOptions();
        const rows = options.sheets[0].rows;

        let altIdx = 0;
        rows.forEach((row) => {
            if (row.type == 'data') {
                if (altIdx % 2 !== 0) {
                    row.cells.forEach((cell) => {
                        cell.background = "#aabbcc";
                    });
                }
                altIdx++;
            }
        });

        component.save(options);
    }
}