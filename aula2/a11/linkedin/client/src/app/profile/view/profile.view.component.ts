import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'profile-view',
    templateUrl:'./profile.view.component.html'
})

export class ProfileViewComponent implements OnInit, OnDestroy {

    id: number
    private sub:any

    constructor(private routeParams: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.routeParams.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}