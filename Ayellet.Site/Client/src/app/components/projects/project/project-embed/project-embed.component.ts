import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../../models/project.type';
import {Embed} from '../../../../models/embed.type';
import { FormControl } from '@angular/forms';
import { ContactsService } from '../../../../services/contacts.service';
import { Subscription } from 'rxjs';
import { Contact } from '../../../../models/contact.type';
import { Params, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ProjectsService } from '../../../../services/projects.service';

@Component({
  selector: 'project-embed',
  templateUrl: './project-embed.component.html',
  styleUrls: ['./project-embed.component.css']
})

export class ProjectEmbedComponent {
  constructor(private projectService: ProjectsService, private route: ActivatedRoute, private contactsService: ContactsService, private http: Http) {
    // this.subscription = this.projectsService.getMessageSelectedProject().subscribe(p => { this.selectedProject = p; });

  }
  subscription: Subscription;
  interests: Contact[] = new Array<Contact>();
  selectedProject: Project = new Project();
  id: number = 1;
  private sub: any;
  interestedAdd: Contact;
  contactEmail: string;
  ContactArea: string;
  isLocation:boolean=false;
  contactPhone: string;
  contactName: any;
  contacts: Contact[] = []
  currenProject: Project;
  interested: any;
  interestingFilterByProject: any;
  selectedContact: Contact = new Contact();
  details: string;
  volunteers: any;
  selectedInterested: any;
  selectedVolunteer: any;
  embedProject: Embed = new Embed();

  // יצירת שיבוץ חדש
  embProject() {
    this.embedProject.volunteerID = this.selectedVolunteer.id;
    this.embedProject.interstedtID = this.selectedInterested.id;
    this.projectService.addNewEmbedProject(this.embedProject).then(x => {
       if(x)
       {this.interested = this.interested.filter(x => x.id != this.embedProject.interstedtID);
        this.volunteers = this.volunteers.filter(x => x.id != this.embedProject.volunteerID);
        this.selectedVolunteer = {};
        this.selectedInterested = {};
      }
      })
  
    //יש לרשום את השיבוץ לטבלת שיבוץ בסרבר
  //יש למחוק את המשובצים מהליסט בוקס
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id, "from inters");
    });
    this.contactsService.getContacts().then(
      x => {
        this.contacts = x;
        console.log(this.contacts);
      }
    )
    this.projectService.getProjectInterstedNotEmbed(this.id).then(x =>{
      this.interested = x.filter(y => y.projectId == this.id);
    });  
    
    this.projectService.getProjectVolunteersNotEmbed(this.id).then(x =>{
      this.volunteers = x.filter(y => y.projectId == this.id);
    });  
      // x =>{ this.interested = x.filter(y => y.projectId == this.id);
        //  יש ללכת ולהביא טבלה של כל המשובצים לפרויקט ואז לסנן את הרשימה של המתנדבים והמתעניינים כך שמי שכבר שובץ לא יהיה קיים
       // var embed.forEach(element => {
          
       // });
    // this.projectService.GetVolunteers().then(
    //   x => {this.volunteers = x.filter(y => y.projectId == this.id);  
    //     console.log(this.volunteers);}
    // )
  }
  IsLocationTrue(){
    //this.isLocation = !this.isLocation ;
    if(this.isLocation)     
      this.volunteers = this.volunteers.filter(y => y.contactArea == this.selectedInterested.contactArea)
  }





  /*   if (this.id) {
         console.log("this.id is good")
         this.projectsService.getProject(this.id).
           then(x => this.selectedProject = x)
         }
               this.projectsService.GetInteresting().then(
                 w => {
                   this.interesting = w;
                   console.log(this.interesting, "from intertsting")
                   this.interesting = this.interesting.filter(x => x.projectId == this.id);
                   console.log(this.interesting, "from intertsting")
                 }
               )
       this.projectsService.GetVolunteers().then(
     w => {
       this.volunteers = w;
       console.log(this.volunteers, "from intertsting")
       this.volunteers = this.volunteers.filter(x => x.projectId == this.id);
        })*/
}