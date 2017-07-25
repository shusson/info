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

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        PageNotFoundComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
