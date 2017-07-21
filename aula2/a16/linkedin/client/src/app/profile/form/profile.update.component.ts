import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../app.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileObj } from '../../profile/profile.obj';

@Component({
    selector:'profile-update',
    templateUrl:'./profile.update.component.html'
})
export class ProfileUpdateComponent implements OnInit, OnDestroy {

    id: number
    private sub:any

    constructor(private route:Router,
                private api:ApiService,
                private routeParams: ActivatedRoute,
                private profile:ProfileObj) {

    }

    ngOnInit() {
        this.sub = this.routeParams.params.subscribe(params => {
            this.id = +params['id'];

            //get the data from one user
            this.api.getUser(this.id).subscribe((user)=>{
                this.profile = user;
            }, erro => console.log(erro));
        });
    }

    save() {
        this.api.updateUser(this.profile).subscribe((result)=>{
            this.route.navigate(['/profile-view',this.id]);
        }, erro => console.log(erro));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}