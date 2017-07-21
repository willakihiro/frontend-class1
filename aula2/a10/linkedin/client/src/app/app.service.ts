import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ProfileObj } from './profile/profile.obj';
import { NewsObj } from './home/news.obj';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    headers: Headers;
    peopleURL : string = "http://localhost:8080/people";
    newsURL : string = "http://localhost:8080/news";
    validUser : string = "http://localhost:8080/profile/check";
    newsFromUser : string = "http://localhost:8080/news/person/";
    allNews : string = "http://localhost:8080/news/all";

    constructor(private http: Http, private profile:ProfileObj) {
        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
    }

    /**
     * To create an user on LinkedIn set a profile object
     * @param profile
     */
    createUser(profile: ProfileObj): Observable<Response> {
        return this.http.post(this.peopleURL, JSON.stringify(profile), { headers: this.headers});
    }

    /**
     * To update an user on LinkedIn set a profile object
     */
    updateUser(profile: ProfileObj): Observable<Response> {
        return this.http.put(this.peopleURL+"/"+profile.id, JSON.stringify(profile), { headers: this.headers});
    }

    /**
     * To get user on LinkedIn set an id
     * @param id
     */
    getUser(id): Observable<ProfileObj> {
        return this.http.get(this.peopleURL+"/"+id)
            .map(res => res.json());
    }

    /**
     * Checks if the user exists
     * @param profile
     */
    checkValidUser(profile: ProfileObj): Observable<Response> {
        return this.http.post(this.validUser, JSON.stringify(profile), { headers: this.headers});
    }

    /**
     * To create a new on LinkedIn set a new object
     * @param news
     */
    createNew(news: NewsObj): Observable<Response> {
        return this.http.post(this.newsURL, JSON.stringify(news), { headers: this.headers});
    }

    /**
     * To update a new on LinkedIn set a new object
     */
    updateNew(news: NewsObj): Observable<Response> {
        return this.http.put(this.newsURL, JSON.stringify(news), { headers: this.headers});
    }

    /**
     * To delete a new on LinkedInd set an id
     */
    deleteNew(id): Observable<Response> {
        return this.http.delete(this.newsURL+"/"+id, { headers: this.headers});
    }

    /**
     * To get news on LinkedIn by one person
     * @param id
     */
    getNew(id): Observable<NewsObj> {
        return this.http.get(this.newsFromUser+id)
            .map(res => res.json());
    }

    /**
     * To get all the news on LinkedIn
     */
    getAllNews(): Observable<NewsObj> {
        return this.http.get(this.allNews)
            .map(res => res.json());
    }


}