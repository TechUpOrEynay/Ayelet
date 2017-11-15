import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../../models/contact.type';
import { FormControl } from '@angular/forms';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  @Input()
  currentContact: Contact;
  ngOnInit() {
    if (this.currentContact)
      alert(this.currentContact);
  }
}