import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'headerBar',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    constructor(private route:Router) {
    }

    goToHome(e) {
        e.preventDefault();
        let id = this.route.url.substring(this.route.url.lastIndexOf('/'),this.route.url.length);
        this.route.navigate(['home'+id]);
    }

    goToPreview(e) {
        e.preventDefault();
        let id = this.route.url.substring(this.route.url.lastIndexOf('/'),this.route.url.length);
        this.route.navigate(['profile-view'+id]);
    }
}