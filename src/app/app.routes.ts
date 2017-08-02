import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { P02082017Component } from './p02082017/p02082017.component';

export const appRoutes: Routes = [
    {path: '', component: BlogComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'p02082017', component: P02082017Component},
    {path: 'about', component: AboutComponent},
    {path: '**', component: PageNotFoundComponent}
];
