import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/shared/ingredient.model';

import { Recipe } from './receipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'i am just testing this',
      'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      [new Ingredient('tomato', 10), new Ingredient('potato', 6)]
    ),
    new Recipe(
      'Test recipe',
      'i am just testing ',
      'https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      [new Ingredient('tomato', 10), new Ingredient('potato', 6)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
}
