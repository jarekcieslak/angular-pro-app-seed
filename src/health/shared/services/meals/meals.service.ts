import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../../../auth/shared/services/auth.service";
import { AngularFireDatabase } from "angularfire2/database";
import { Store } from "store";


export interface MealModel{
    name: string;
    ingredients: string[],
    timestamp: number;
    $key: string;
    $exists: () => boolean
}

@Injectable()
export class MealsService {

    public meals$: Observable<any> = this.db.list(`meals/${this.uid}`)
        .do(meals => {
            if (!meals) {
                this.store.set('meals', null);
                return;
            }
            this.store.set('meals', meals)
        });

    constructor(private store: Store,
                private db: AngularFireDatabase,
                private authService: AuthService) {
    }

    get uid() {
        return this.authService.user.uid;
    }

}