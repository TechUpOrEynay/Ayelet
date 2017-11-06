
// import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
// import { MdDialog, MdDialogRef } from '@angular/material';
// import { DonorsService } from '../../../services/donors.service';
// import { Donor } from '../../../models/donor.type';
// import { MD_DIALOG_DATA } from '@angular/material';
// @Component({
//   selector: 'donors-editDialog',
//   templateUrl: 'donors.component.editDialog.html',
//   styleUrls: ['./donors.component.editDialog.css']
// })
// export class EditDialogComponent implements OnInit {

//   donors: Donor[];

//   constructor(private donorService: DonorsService, public dialogRef: MdDialogRef<EditDialogComponent>, @Inject(MD_DIALOG_DATA) public donor: Donor) { }
//   ngOnInit() {
//     this.donorService.getDonors().then(x => { this.donors = x });
//   }
//   @Output()
//   closeDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

//   close() {
//     this.closeDialog.emit(true);
//   }

// }     
import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
//import { DonorsService } from '../../../services/donors.service';
//import { Donor } from '../../../models/donor.type';

// export interface ConfirmModel {
//   donor: Donor;
// }

@Component({
  selector: 'donors-editDialog',
  templateUrl: 'donors.component.editDialog.html',
  styleUrls: ['donors.component.editDialog.css'],
})
export class EditDialogComponent {
//extends DialogComponent<ConfirmModel, Donor> implements ConfirmModel {
  // donor: Donor;
  // constructor(dialogService: DialogService, private donorService: DonorsService, ) {
  //   super(dialogService);
  // }
  // ngOnInit() {
  //   // if(this.donor.id)
  //   // this.donorService.getDonorById(this.donor.id).then(x => { this.donor = x });
  // }
  // confirm() {
  //   // on click on confirm button we set dialog result as true,
  //   // ten we can get dialog result from caller code
  //   this.close();
  //       this.result = this.donor;
  // }
  // cancel() {
  //   this.close();
  // }
}