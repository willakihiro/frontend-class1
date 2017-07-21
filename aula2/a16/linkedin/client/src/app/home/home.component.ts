import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfileObj } from '../profile/profile.obj';
import { NewsObj } from './news.obj';
import { ApiService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'home',
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

    @Input() addNew: NewsObj

    id: number
    closeResult: string
    private sub:any
    news: any

    constructor( private modalService: NgbModal,
                 private api:ApiService,
                 private profile: ProfileObj,
                 private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            //get the data from one user
            this.api.getUser(this.id).subscribe((user)=>{
                this.profile = user;

                //get all the news of this user
                this.api.getAllNews().subscribe((news)=>{
                    this.news = news;
                }, erro => console.log(erro));

            }, erro => console.log(erro));
        });
    }

    open(content,event,obj) {
    console.log("t")
        event.preventDefault();

        //Initialize the news object
        this.addNew = new NewsObj();

        if (obj) {
            this.addNew = obj;
        } else {
            this.addNew.belongs = {
                id: this.profile.id
            }
        }

        this.modalService.open(content).result.then((result) => {
        }, (reason) => {
        });

    }

    saveNews(obj) {
        //edit current object
        if (obj.hasOwnProperty('id')) {
            this.api.updateNew(obj).subscribe((result)=>{
                this.news.splice(this.news.indexOf(obj),1);
                let newAdded = result.json();
                newAdded.belongs = {
                    id: this.profile.id,
                    name: this.profile.name,
                    email: this.profile.email
                }
                this.news.unshift(newAdded);
            }, erro => console.log(erro));
        } else {
            //save new object
            this.api.createNew(obj).subscribe((result)=>{
                let newAdded = result.json();
                newAdded.belongs = {
                    id: this.profile.id,
                    name: this.profile.name,
                    email: this.profile.email
                }
                this.news.unshift(newAdded);
            }, erro => console.log(erro));
        }
    }

    belongsToUser(newsBelongsTo) {
        return this.profile.id === newsBelongsTo
    }

    deleteNew(obj) {
        this.api.deleteNew(obj.id).subscribe(()=>{
            this.news.splice(this.news.indexOf(obj),1);
        },error => console.log(error));
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