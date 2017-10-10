import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from "store";
import { AuthService } from "../../../auth/shared/services/auth.service";
import { UserModel } from "../../models/user.model";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div>
            <app-header
                    [user]="user$ | async"
                    (logout)="onLogout()">
            </app-header>
            <app-nav
                    *ngIf="(user$ | async)?.authenticated">
            </app-nav>
            <div class="wrapper">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit, OnDestroy {

    user$: Observable<UserModel>;
    subscription: Subscription = new Subscription();

    constructor(private store: Store,
                private authService: AuthService,
                private router: Router) {
    }

    public ngOnInit() {
        this.subscription = this.authService.auth$.subscribe();
        this.user$ = this.store.select<UserModel>('user');
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public async onLogout() {
        try {
            await this.authService.logoutUser();
            this.router.navigate(['auth', 'login']);
        } catch (err) {
            console.log('error logging out ', err);
        }

    }
}
