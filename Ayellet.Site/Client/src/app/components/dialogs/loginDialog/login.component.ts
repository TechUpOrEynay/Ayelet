import { Component , OnInit} from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { UserService } from '../../../services/user.service'
import { User } from '../../../models/user.type'
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent extends DialogComponent<null, User> implements OnInit{
     user: User ;
     users:User[];
     x:boolean= false;
     constructor(dialogService: DialogService, private userService: UserService, ) {
        super(dialogService);
         this.user = new User();
     }
     ngOnInit() {
        this.userService.getUsers().then(x =>{
            this.users = x;})
     }
     confirm() {
         var exists = this.users.find(x => x.userName == this.user.userName && x.password == this.user.password);
           this.close();
           if(exists)
           return this.result = exists;
           else
            alert("שם משתמש או סיסמה אינם נכונים")
     }
     cancel()
         {
            this.close(); 
         }
    
}


