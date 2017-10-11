import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'meal-form',
    styleUrls: ['meal-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="meal-form">
            <form [formGroup]="form">
                <div class="meal-form__name">
                    <label>
                        <h3>Meal name</h3>
                        <input
                                type="text"
                                placeholder="eg. English breakfast"
                                formControlName="name"
                        >
                    </label>
                </div>
                <div class="meal-form__food">
                    <div class="meal-form__subtitle">
                        <h3>Food</h3>
                        <button
                                type="button"
                                class="meal-form__add">
                            <img src="/img/add-white.svg"/>
                            Add food
                        </button>
                    </div>
                </div>
                <div class="meal-form__submit">
                    <button type="submit" class="button" (click)="createMeal()">Create meal</button>
                    <a class="button--cancel" [routerLink]="['../']">Cancel</a>
                </div>
            </form>
        </div>

    `
})
export class MealFormComponent {

    public constructor(private fb: FormBuilder) {

    }

    public form = this.fb.group({
        name: ['', Validators.required],
        ingredients: this.fb.array([''])
    });

    public createMeal() {
        console.log(this.form.value);
    }

}