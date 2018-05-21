import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../../models/project.type';
import { FormControl } from '@angular/forms';
import { ContactsService } from '../../../../services/contacts.service';
import { Contact } from '../../../../models/contact.type'
import { Http } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from '../../../../services/projects.service';

@Component({
  selector: 'project-volunteer',
  templateUrl: './project-volunteer.component.html',

  styleUrls: ['./project-volunteer.component.css']
})

export class ProjectVolunteerComponent {
  constructor(private contactsService: ContactsService, private http: Http, private route: ActivatedRoute, private projectsService: ProjectsService) {

  }
  volunteers: Contact[] = new Array<Contact>();
  id: number;
  contacts: Contact[] = [];
  selectedProject: Project;
  currentProject: Project;
  volunteerss: any;
  selectedContact: any = {};
  details: string;
  location:string ;
  newVolunteer: any = {};
  contactName: any;
  ngOnInit(): void 
  {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'] as number;
    });

    this.contactsService.getContacts().then(
      x => this.contacts = x
    )
   if (this.id) {
      this.projectsService.getProject(this.id).
         then(x => this.selectedProject = x)
   }
    // this.projectsService.getProject(this.id).then(
    //   x => {
    //     this.currentProject = x;
    //     this.contactsService.getContacts().then(
    //       y => {
    //         this.contacts = y;
            //  this.contacts = this.contacts.filter(x => x.IsVolunteer != true)
            this.projectsService.GetVolunteers().then(
              w => {
                this.volunteerss = w;
                console.log(this.volunteerss, "from intertsting")
                this.volunteerss = this.volunteerss.filter(x => x.projectId == this.id);
              });
          }
  //       )
  //     }
  //   )
  // }
  addVolunteer() {
    var isExsist = this.volunteerss.find(x => x.contactID == this.selectedContact.id && x.projectId == this.id)
    if(!isExsist)
    {
        this.projectsService.createVolunteer(this.id, this.selectedContact.id, this.details).then( x => {
        const y = x;
        this.newVolunteer.details = this.details;
        this.newVolunteer.contactLocation = this.location;
        this.newVolunteer.contactLastName = this.selectedContact.lastName;
        this.newVolunteer.contactFirstName = this.selectedContact.firstName;
        this.newVolunteer.contactPhone = this.selectedContact.phone;
        this.newVolunteer.contactEmail = this.selectedContact.email;
        this.newVolunteer.contactID = this.selectedContact.id;
        this.newVolunteer.projectId = this.id;
        this.volunteerss.push(this.newVolunteer);
        this.contactName = " ";
        this.location =" ";
        this.selectedContact= new Contact();
        this.details = " ";
      })
    }
    this.newVolunteer = {};
    }
  onSelectContact(e: any) {
    this.selectedContact = this.contacts.filter(x => x.id == e.target.value)[0];
    this.projectsService.getLocationNameById(this.selectedContact.locationID).then(x => {
      if (x != " ")
        this.location = x
    })
  }
  
  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}