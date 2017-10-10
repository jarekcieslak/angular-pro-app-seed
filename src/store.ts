import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserModel } from "./app/models/user.model";
import { MealModel } from "./health/shared/services/meals/meals.service";

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

export interface State {
    user: UserModel,
    meals: MealModel[]

    [key: string]: any
}

const state: State = {
    user: undefined,
    meals: undefined
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().distinctUntilChanged();

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pluck(name);
    }

    set(name: string, state: any) {
        this.subject.next({...this.value, [name]: state});
    }

}
