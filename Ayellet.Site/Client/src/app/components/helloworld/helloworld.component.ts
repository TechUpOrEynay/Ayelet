import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.type';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'helloworld',
    templateUrl: './helloworld.component.html'
})
export class HelloWorldComponent implements OnInit {
    public allContacts: Contact[];
    public contacts: Contact;

    constructor(private contactsService: ContactsService) {
    }

    ngOnInit() {
        this.contactsService.getContacts()
            .then(contacts => {
                this.allContacts = contacts;
            });
        this.contactsService.getContact(1)
            .then(contact => {
                this.contacts = contact;
            });
    }
}
