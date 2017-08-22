import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from '../blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    providers: [BlogService]
})
export class BlogComponent implements OnInit {
    posts: Post[] = [];
    constructor(private bs: BlogService) {
    }

    ngOnInit() {
        this.bs.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

}
