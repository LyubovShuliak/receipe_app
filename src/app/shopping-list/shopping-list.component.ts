import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 10),
    new Ingredient('tomatoes', 6),
  ];

  addIngredient(event: Ingredient) {
    this.ingredients.push(event);
  }
  removeIngredient(event: Ingredient) {
    this.ingredients = this.ingredients.filter(
      (el) => el.name !== event.name && el.amount !== event.amount
    );
  }
}
