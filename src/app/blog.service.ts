import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import moment from "moment";

export class Post {
    constructor(
        public title = "",
        public body = "",
        public slug = "",
        public timestamp = 0,
        public updated = 0,
        public uuid = "",
        public image = ""
    ) {}

    date() {
        const date = moment(this.timestamp);
        return date.format("DD/MM/YYYY")
    }

    url() {
        return `post/${this.slug}`;
    }

    elipse() {
        return this.body.slice(0, 250).concat("...");
    }
}

@Injectable()
export class BlogService {
    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        return this.http
            .get(`${environment.blogCMS}/contents?type=Post&count=-1`)
            .pipe(
                map((v: any) => {
                    return v.data.map(p => {
                        return new Post(
                            p.title,
                            p.body,
                            p.slug,
                            p.timestamp,
                            p.updated,
                            p.uuid,
                            p.image
                        );
                    });
                })
            );
    }

    getPost(slug: string): Observable<Post> {
        return this.http
            .get(`${environment.blogCMS}/content?slug=${slug}`)
            .pipe(
                map((v: any) => {
                    const p = v.data[0];
                    return new Post(
                        p.title,
                        p.body,
                        p.slug,
                        p.timestamp,
                        p.updated,
                        p.uuid,
                        p.image
                    );
                })
            );
    }
}
