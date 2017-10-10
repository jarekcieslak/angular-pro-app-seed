import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from "../../models/user.model";

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-header.component.scss'],
    template: `
        <div class="app-header">
            <div class="wrapper">
                <img src="/img/logo.svg">
                <div
                        class="app-header__user-info"
                        *ngIf="user?.authenticated">
                    {{user?.email}}
                    <span (click)="logoutUser()"></span>
                </div>
            </div>
        </div>
    `
})
export class AppHeaderComponent {

    @Input()
    user: UserModel;

    @Output()
    logout = new EventEmitter<any>();

    logoutUser() {
        this.logout.emit();
    }

}