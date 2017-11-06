import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact.type';
import {FormControl} from '@angular/forms';
import {ContactsService} from '../../services/contacts.service';
// import {ElementRef} from ''
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

private  contacts: Contact[] = [];
    contactCtrl: FormControl;
    public query = '';
    filteredContacts: any;
    public  selectedContact: Contact;
    public filteredList = [];
    public elementRef; 
    constructor(private contactsService: ContactsService ) {}
    ngOnInit(){  
     this.contactCtrl = new FormControl();
     this.contactsService.getContacts().then(contact => {
            this.contacts = contact;
            this.contacts.forEach(y => { y.fullName = y.firstName + " " + y.lastName });
            this.filteredContacts = this.contactCtrl.valueChanges
            .startWith(null)
            .map(name => this.filter(name));
         });
    }
     filter(val: any) {
     return val && this.contacts ? this.contacts.filter(c => c.fullName.indexOf(val?val:val.fullName) === 0)
               : this.contacts;
     }
     displayContact(contact: Contact): string {
       return contact ? contact.fullName : null;
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


