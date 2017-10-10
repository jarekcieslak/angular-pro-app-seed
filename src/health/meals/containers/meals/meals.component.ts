import { Component, OnDestroy, OnInit } from '@angular/core';
import { MealModel, MealsService } from "../../../shared/services/meals/meals.service";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Store } from "store";

@Component({
    selector: 'meals',
    styleUrls: ['meals.component.scss'],
    template: `
        <div>
            <p *ngIf="loading">loading...</p>
            <p *ngIf="!loading">{{meals$ | async | json}}</p>
        </div>
    `
})
export class MealsComponent implements OnInit, OnDestroy {

    public meals$: Observable<MealModel[]>;
    public loading: boolean = true;
    private subscription: Subscription = new Subscription();

    constructor(private mealsService: MealsService, private store: Store) {
    }

    public ngOnInit(): void {
        this.meals$ = this.store.select<MealModel[]>('meals');
        this.subscription = this.mealsService.meals$.subscribe(data => {
            this.loading = false;
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
