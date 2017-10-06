import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from "../auth/auth.module";

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        AuthModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        Store
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

//
// var config = {
//     apiKey: "AIzaSyBboFPjwqJGk8gTEy4NNYtCyM7kiytYZdk",
//     authDomain: "fitnessapp-6ae8f.firebaseapp.com",
//     databaseURL: "https://fitnessapp-6ae8f.firebaseio.com",
//     projectId: "fitnessapp-6ae8f",
//     storageBucket: "fitnessapp-6ae8f.appspot.com",
//     messagingSenderId: "627184340113"
// };