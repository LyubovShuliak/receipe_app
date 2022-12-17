import { Subject } from 'rxjs';
import { Ingredient } from 'src/shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 10),
    new Ingredient('tomatoes', 6),
  ];
  onNewItem = new Subject<Ingredient[]>();
  onEditing = new Subject<number>();

  getIngredients() {
    return this.ingredients;
  }
  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.onNewItem.next(this.ingredients);
  }

  removeIngredient(event: Ingredient) {
    this.ingredients = this.ingredients.filter(
      (el) => el.name !== event.name && el.amount !== event.amount
    );
    this.onNewItem.next(this.ingredients);
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  editIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.onNewItem.next(this.ingredients.slice());
  }
}
