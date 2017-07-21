import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProfileObj } from '../profile/profile.obj';
import { ApiService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'home',
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

    id: number
    private sub:any

    constructor( private api:ApiService,
                 private profile: ProfileObj,
                 private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            //get the data from one user
            this.api.getUser(this.id).subscribe((user)=>{
                this.profile = user;

            }, erro => console.log(erro));
        });
    }

    getProfile() {
        return {
            name: this.profile.name,
            job: this.profile.job,
            photo: this.profile.photo
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}