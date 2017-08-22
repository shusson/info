import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { P02082017Component } from './p02082017/p02082017.component';
import { P04082017Component } from './p04082017/p04082017.component';
import { P07082017Component } from './p07082017/p07082017.component';
import { P14082017Component } from './p14082017/p14082017.component';
import { P18082017Component } from './p18082017/p18082017.component';
import { PostComponent } from './post/post.component';

export const appRoutes: Routes = [
    {path: '', component: BlogComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'p02082017', component: P02082017Component},
    {path: 'p04082017', component: P04082017Component},
    {path: 'p07082017', component: P07082017Component},
    {path: 'p14082017', component: P14082017Component},
    {path: 'p18082017', component: P18082017Component},
    {path: 'blog/post/:slug', component: PostComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: PageNotFoundComponent}
];
