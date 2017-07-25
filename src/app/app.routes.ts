import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    {path: '', component: BlogComponent},
    {path: 'blog', component: BlogComponent},
    {path: '**', component: PageNotFoundComponent}
];
