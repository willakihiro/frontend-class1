import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileObj } from '../profile.obj';
import { ApiService } from 'app/app.service';

@Component({
    selector:'addprofile',
    templateUrl: './profile.add.component.html'
})

/**
 * Credit to someone on the Internet
 * Full code: https://plnkr.co/edit/PFfebmnqH0eQR9I92v0G?p=preview
 */
export class ProfileAddComponent {

    showPhotoMsg: boolean = false;

    constructor(private route:Router, private profile:ProfileObj, private api:ApiService) {

    }

    getPicture(evt){
        var files = evt.target.files;
        var file = files[0];

        if (files && file) {
            var reader = new FileReader();
            reader.onload =this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.profile.photo = "data:image/jpg;base64,"+btoa(binaryString);
        this.showPhotoMsg = false;
    }

    save(form) {
        if (this.profile.photo !== null) {
            this.api.createUser(this.profile)
                .subscribe((result)=>{
                    let profileAdded = result.json();
                    this.route.navigate(['home',profileAdded.id]);
                },erro => {
                    console.log(erro);
                })
        }
        this.showPhotoMsg = true;
    }
}