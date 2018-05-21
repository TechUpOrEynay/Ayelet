import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../../models/project.type';
import { FormControl } from '@angular/forms';
import { ContactsService } from '../../../../services/contacts.service';
import { Contact } from '../../../../models/contact.type';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../../../../services/projects.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'project-intresting',
  templateUrl: './project-intresting.component.html',

  styleUrls: ['./project-intresting.component.css']
})

export class ProjectIntrestingComponent {
  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private http: Http, private projectsService: ProjectsService) {
    // this.subscription = this.projectsService.getMessageSelectedProject().subscribe(p => { this.selectedProject = p; });

  }
  subscription: Subscription;
  interests: Contact[] = new Array<Contact>();
  selectedProject: Project ;
  //= new Project();
  id: number ;
  private sub: any;
  interestedAdd: Contact;
  contactEmail: string;
  ContactArea: string;
  details: string;
  contactPhone: string;
  contactName: any;
  contacts: Contact[] = []
  currenProject: Project;
  interesting: any;
  interestingFilterByProject: any;
  newIntersted: any = {};
  selectedContact: Contact = new Contact();
  Details: string;
  location: string = " ";
  ngOnInit() 
  {
    this.route.params.subscribe((params: Params) => {
      if(!this.id)
        this.id = +params['id'];
      else
        {this.id = +params['id'];
        this.projectsService.GetInteresting().then(w => {
        this.interesting = w;
        this.interesting = this.interesting.filter(x => x.projectId == this.id)})
        }  
    });

    this.contactsService.getContacts().then(x => {
      this.contacts = x;
    });

    if(this.id)
    {
      this.projectsService.getProject(this.id).then(x => 
      {
          this.currenProject = x;
      //  this.contacts = this.contacts.filter(x => x.IsVolunteer != true)
          this.projectsService.GetInteresting().then(w => {
             this.interesting = w;
             this.interesting = this.interesting.filter(x => x.projectId == this.id);
          });        
      });
    }
  }
  addIntersting(e: any) {
    var isExsist = this.interesting.find(x => x.contactID == this.selectedContact.id && x.projectId == this.id)
    if(!isExsist)
    {
       this.projectsService.createIntersting(this.id, this.selectedContact.id, this.Details).then
          (x => {
            const I = x;
            console.log(I);
            this.newIntersted.details = this.Details;
            this.newIntersted.contactLocation = this.location;
            this.newIntersted.contactLastName = this.selectedContact.lastName;
            this.newIntersted.contactFirstName = this.selectedContact.firstName;
            this.newIntersted.contactPhone = this.selectedContact.phone;
            this.newIntersted.contactEmail = this.selectedContact.email;
            this.newIntersted.contactID = this.selectedContact.id;
            this.newIntersted.projectId = this.id;
            this.interesting.push(this.newIntersted);
            this.contactName = " ";
            this.location =" ";
            this.selectedContact= new Contact();
            this.Details = " ";
       })  
    }
    this.newIntersted = {};
  }

  onSelectContact(e: any)
   {
      this.selectedContact = this.contacts.filter(c => c.id == e.target.value)[0];
      this.projectsService.getLocationNameById(this.selectedContact.locationID).then(x => {
        if (x != " ")
          this.location = x
      })
   }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}



