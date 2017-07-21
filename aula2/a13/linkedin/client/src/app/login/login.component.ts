import { Component } from '@angular/core';
import { ApiService } from '../app.service';
import { Router } from '@angular/router';
import { ProfileObj } from '../profile/profile.obj';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['login.css']
})
export class LoginComponent {

    showMsg : boolean = false;

    constructor(private route:Router, private profile: ProfileObj, private api: ApiService) {

    }

    checkValidUser() {
        if (this.profile.email !== null && this.profile.password !== null) {
            this.api.checkValidUser(this.profile).subscribe((result)=>{
                this.profile = result.json();
                this.route.navigate(['home', this.profile.id]);
            }, erro => { this.showMsg = true; } );
        }
    }

}