import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Store } from "store";
import "rxjs/add/operator/do"
import { UserModel } from "../../../app/models/user.model";

@Injectable()
export class AuthService {

    public auth$ = this.af.authState
        .do(next => {
            if (!next) {
                this.store.set('user', null);
                return;
            }
            const user: UserModel = {
                email: next.email,
                uid: next.uid,
                authenticated: true,
            };
            this.store.set('user', user);
        });

    constructor(private af: AngularFireAuth, private store: Store) {

    }
    public get authState() {
        return this.af.authState;
    }

    public createUser(email: string, password: string) {
        return this.af.auth.createUserWithEmailAndPassword(email, password);
    }

    public loginUser(email: string, password: string) {
        return this.af.auth.signInWithEmailAndPassword(email, password);
    }

    public logoutUser() {
        return this.af.auth.signOut()
    }
}