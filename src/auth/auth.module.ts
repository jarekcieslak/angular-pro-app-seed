import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                loadChildren: './login/login.module#LoginModule'
            },
            {
                path: 'register',
                loadChildren: './register/register.module#RegisterModule'
            }
        ]
    }
];

export const FIREBASE_CONFIG: FirebaseAppConfig = {
    apiKey: "AIzaSyBboFPjwqJGk8gTEy4NNYtCyM7kiytYZdk",
    authDomain: "fitnessapp-6ae8f.firebaseapp.com",
    databaseURL: "https://fitnessapp-6ae8f.firebaseio.com",
    projectId: "fitnessapp-6ae8f",
    storageBucket: "fitnessapp-6ae8f.appspot.com",
    messagingSenderId: "627184340113"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule
    ]
})
export class AuthModule {

}