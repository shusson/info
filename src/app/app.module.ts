import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AboutComponent } from './about/about.component';
import { blogRoutes } from '../../jekyll/gen_blog/blog.routes';
import { blogDecs } from '../../jekyll/gen_blog/blog.decs';

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        PageNotFoundComponent,
        AboutComponent,
    ].concat(blogDecs),
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot(
            blogRoutes.concat(appRoutes),
            // { enableTracing: true }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
