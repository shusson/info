import { Component, OnInit, Input } from '@angular/core';
import { BlogService, Post } from '../blog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [BlogService]
})
export class PostComponent implements OnInit {
    post: Post;

    constructor(private bs: BlogService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => {
                return this.bs.getPost(params.get('slug'));
            })
            .subscribe(post => this.post = post);
    }

}
