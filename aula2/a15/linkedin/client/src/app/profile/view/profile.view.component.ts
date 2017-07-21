import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../app.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileObj } from '../../profile/profile.obj';

@Component({
    selector:'profile-view',
    templateUrl:'./profile.view.component.html'
})

export class ProfileViewComponent implements OnInit, OnDestroy {

    id: number
    private sub:any

    constructor(private route:Router,
                private api:ApiService,
                private routeParams: ActivatedRoute,
                private profile: ProfileObj) {

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
        this.route.navigate(['/profile-view',this.id]);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}