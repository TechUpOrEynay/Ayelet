import { Component, OnInit , Input } from '@angular/core';
import {Project} from '../../../models/project.type';
import {FormControl} from '@angular/forms';
import {ContactsService} from '../../../services/contacts.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent{

    @Input() 
    currentProject:Project;
}