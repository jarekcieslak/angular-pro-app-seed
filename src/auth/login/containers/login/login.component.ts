import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    public error: string;

    constructor(private af: AngularFireAuth, private router: Router) {
    }

    public async loginUser(event: FormGroup) {
        const {email, password} = event.value;
        try {
            const data = await this.af.auth.signInWithEmailAndPassword(email, password);
            this.router.navigate(['/']);
        } catch (error) {
            this.error = error.message;
        }
    }
}