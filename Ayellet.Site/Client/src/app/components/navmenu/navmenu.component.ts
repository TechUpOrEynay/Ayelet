import { Component,OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
// import {User} from '../../models/user.type';
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
    constructor(private route: ActivatedRoute , private router: Router){}
    // private user= new User();
    ngOnInit() {
        // this.user.userName= this.route.snapshot.params['userName'];    
        // this.user.password= this.route.snapshot.params['password']; 
     //   alert(this.user.userName);
        // alert(this.user.password );
    }
    // logOut()
    // {
    //     this.router.navigate(['/app-root']);
    // }
}