import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Contact } from '../../../../models/contact.type';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ContactsService } from '../../../../services/contacts.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
//import { DateTimePickerDirective } from "ng2-datetime-picker";
import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { Location } from '../../../../models/location.type';
import { RelatedPerson } from '../../../../models/relatedPerson.type';
//enum Flag { CreatNew, EditCurrent };

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html'
  //   styleUrls: ['./contact.component.css']


})



export class ContactDetailsComponent implements OnInit, OnDestroy {

  private id: number;
  private currentcontact: any;
  private contacts: Contact;
  //private contactUpdate: Contact;
  private boolUpdateContact: boolean;
  private editAnswer: any;
  private listLocation: Location[] = [];
  private selectedLocation: Location;
  //private flag: Flag.CreatNew;
  private flag: boolean = false;
  private listRelatedPerson: RelatedPerson[] = [];
  private selectedRelatedPerson: RelatedPerson;
  private selL: number;
  private selR: any;
  private radioButonString: string;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  getListArea() {
    this.contactsService.getLocations().then(l => {
      this.listLocation = l;
      this.contactsService.getLocationById(this.contacts.locationID).then(lByid => {
        this.selectedLocation = lByid;
        this.selL = this.selectedLocation.id;
      });
    });
  }
  // this.selectedArea.id = this.contacts.locationID;
  getListRelatedPerson() {
    this.contactsService.getRelatedPerson().then(r => {
      this.listRelatedPerson = r;
    });

  }


  ngOnInit() {
    this.currentcontact = this.route.params.subscribe(params => {
      // console.log('params', params);
      this.id = params['currentContact'];
      this.contactsService.getContact(this.id).then(contact => {
        this.contacts = contact;
        //  console.log('contact', contact);
        if(this.contacts.relatedPersonID)
        {this.contactsService.getRelatedPersonById(this.contacts.relatedPersonID).then(rr => {
          this.selectedRelatedPerson = rr;
          this.selR = this.selectedRelatedPerson.id;
        });}
        this.getListArea();
        this.getListRelatedPerson();
      });

    });

  }

  onChangeLocation(newObj) {

  }

  ngOnDestroy() {
    this.currentcontact.unsubscribe();
  };
  onChangeRelatedPerson(id: number): void {
    this.contacts.relatedPersonID = id;
  }

  updateCurrentContact() {
    if (this.flag) {
      console.log(this.contacts, "this.contacts.name");
      this.contactsService.createNewContact(this.contacts).then(answer => {
        this.editAnswer = answer;
        if (this.editAnswer == 0) {
          alert("איש הקשר החדש לא נקלט במערכת!");
        }
        else {
          alert("איש הקשר החדש נקלט בהצלחה במערכת");
          // this.contactsService.getContact(this.editAnswer).then(contact => {
          //   this.contacts = contact;
          // });
          
        }
      });

      //window.location.reload();
    }
    else
      if (!this.flag) {
        this.contactsService.updateServiceDetailes(this.contacts).then(answer => {
          this.editAnswer = answer;
          if (this.editAnswer) {
            alert("עודכן בהצלחה");
            window.location.reload();
          }
          else {
            alert("איש הקשר לא עודכן במערכת!");
            window.location.reload();
          }

        });
      }
    this.flag = false;
  }
  notUpdateCurrentContact() {
    window.location.reload();
  }

  creatNewContact() {
    this.contacts.firstName = "";
    this.contacts.lastName = "";
    this.contacts.isNewlater = false;
    this.contacts.isVolunteer = false;
    this.contacts.mobile = "";
    this.contacts.notes = "";
    this.contacts.phone = "";
    this.contacts.fullName = "";
    this.contacts.id =0;
    //this.flag =Flag.CreatNew ;
    this.flag = true;
  }
}


export class DatepickerFilterExample {
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}