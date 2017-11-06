import { Component, OnInit, Inject } from '@angular/core';
//import {MD_DIALOG_DATA , MdDialogRef , MdDialog} from '@angular/material';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
    data: String;
  }
@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html'
 // styleUrls: ['./confirm-dialog.component.css']
})
export class SuccessDialogComponent  extends DialogComponent<ConfirmModel, null> implements OnInit {
  data:string;
  constructor(public dialogService:DialogService ) {super(dialogService); }

  ngOnInit() {
  }

}
