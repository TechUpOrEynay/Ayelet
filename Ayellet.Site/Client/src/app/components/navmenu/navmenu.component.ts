import { Component } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import {User} from '../../models/user.type';
import {LoginComponent} from '../dialogs/loginDialog/login.component';
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent  {
    constructor( private dialogService: DialogService ){}
    user= new User();
    isLogin:boolean= false;
    login() {
         let disposable = this.dialogService.addDialog(LoginComponent,
            { backdropColor: 'rgba(0, 0, 0, 0.5)' })
             .subscribe((result) => {
                //We get dialog result
                 if (result) {
                     this.isLogin = true;
                 } 
             });
    }
     logOut()
     {
         this.isLogin = false; 
     }
}