import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

export class Post {
    constructor(public title = "",
                public body = "",
                public slug = "",
                public timestamp = 0,
                public updated = 0,
                public uuid = "",
                public image = "") {}

    date() {
        const date = new Date(this.timestamp);
        return [date.getDate(), date.getMonth() + 1 , date.getFullYear()];
    }

    url() {
        return `post/${this.slug}`;
    }
}

@Injectable()
export class BlogService {

    constructor(private http: HttpClient) {

    }

    getPosts(): Observable<Post[]> {
        return this.http.get(`${environment.blogCMS}/contents?type=Post`)
            .map((v: any) => {
                return v.data.map(p => {
                    return new Post(p.title, p.body, p.slug, p.timestamp, p.updated, p.uuid, p.image);
                });
            });
    }

    getPost(slug: string): Observable<Post> {
        return this.http.get(`${environment.blogCMS}/content?slug=${slug}`)
            .map((v: any) => {
                const p = v.data[0];
                return new Post(p.title, p.body, p.slug, p.timestamp, p.updated, p.uuid, p.image);
            });
    }

}
