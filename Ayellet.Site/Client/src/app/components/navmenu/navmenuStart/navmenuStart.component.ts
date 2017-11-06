import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { DialogService } from "ng2-bootstrap-modal";
// import { LoginComponent } from '../../dialogs/loginDialog/login.component'
import { Router } from '@angular/router'
// import {User} from '../../../models/user.type'
@Component({
    selector: 'nav-menu-start',
    templateUrl: './navmenuStart.component.html',
    styleUrls: ['./navmenuStart.component.css']
})
export class NavmenuStartComponent {
    isLogin:boolean = false;
    constructor(public dialog: MatDialog, private dialogService: DialogService, private router: Router) { }
    
}
    
    
    // login() {
    //     let disposable = this.dialogService.addDialog(LoginComponent,
    //         { backdropColor: 'rgba(0, 0, 0, 0.5)' })
    //         .subscribe((result) => {
    //             //We get dialog result
    //             if (result) {
    //                 this.isLogin = true;
    //               // this.router.navigate(['/nav-menu',{userName:result.userName , password:result.password}]);
    //               //  this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    //             }
    //             else {
    //                 alert("שם משתמש או סיסמא אינם נכונים")
    //             }   
    //         });
   // }
    // logOut()
    // {
    //     this.isLogin = false; 
    // }

