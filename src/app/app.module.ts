import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { Store } from 'store';
// feature modules
import { AuthModule } from "../auth/auth.module";
// containers
import { AppComponent } from './containers/app/app.component';
import { SharedModule } from "../auth/shared/shared.module";
import { AppNavComponent } from "./components/app-nav/app-nav.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { HealthModule } from "../health/health.module";

// components

// routes
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'schedule'
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        AuthModule,
        HealthModule,
        SharedModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AppNavComponent,
        AppHeaderComponent
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
