import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    {path: '', component: BlogComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: PageNotFoundComponent}
];
