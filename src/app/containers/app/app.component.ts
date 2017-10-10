import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from "store";
import { AuthService } from "../../../auth/shared/services/auth.service";
import { UserModel } from "../../models/user.model";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div>
            <h1>{{user$ | async | json}}</h1>
            <div class="wrapper">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit, OnDestroy {

    user$: Observable<UserModel>;
    subscription: Subscription = new Subscription();

    constructor(private store: Store, private authService: AuthService) {
    }

    public ngOnInit() {
        this.subscription = this.authService.auth$.subscribe(data => console.log(data));
        this.user$ = this.store.select<UserModel>('user');
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
