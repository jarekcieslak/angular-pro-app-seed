import { Component } from '@angular/core';
import { MealModel } from "../../../shared/services/meals/meals.service";

@Component({
    selector: 'meal',
    styleUrls: ['meal.component.scss'],
    template: `
        <div class="meal">
            <div class="meal__title">
                <h1>
                    <img src="/img/food.svg">
                    <span>Create meal</span>
                </h1>
            </div>
        </div>
        <div>
            <meal-form (create)="addMeal($event)">
            </meal-form>
        </div>
    `
})
export class MealComponent {
    constructor() {
    }

    public addMeal(event: MealModel) {
        console.log(event);
    }
}