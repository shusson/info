import { Component, OnInit, Input } from '@angular/core';
import { BlogService, Post } from '../blog.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    @Input() slug: string;
    post = new Post();

    constructor(private bs: BlogService) {
    }

    ngOnInit() {
        this.bs.getPost(this.slug).subscribe(v => {
            this.post = v;
        });
    }

}
