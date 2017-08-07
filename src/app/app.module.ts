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
import { P02082017Component } from './p02082017/p02082017.component';
import { PostComponent } from './post/post.component';
import { P04082017Component } from './p04082017/p04082017.component';
import { P07082017Component } from './p07082017/p07082017.component';

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        PageNotFoundComponent,
        AboutComponent,
        P02082017Component,
        PostComponent,
        P04082017Component,
        P07082017Component,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
