import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        PageNotFoundComponent,
        AboutComponent,
        PostComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
