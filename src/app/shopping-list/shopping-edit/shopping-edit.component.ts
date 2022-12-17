import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editingMode = false;
  editingIndex: number;
  editingItem: Ingredient;
  form = new FormGroup({
    name: new FormControl('', Validators.minLength(1)),
    amount: new FormControl(0, [Validators.required, Validators.min(1)]),
  });
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.onEditing.subscribe((index: number) => {
      this.editingMode = true;
      this.editingIndex = index;
      this.editingItem = this.slService.getIngredient(this.editingIndex);
      this.form.setValue(this.editingItem);
    });
  }

  clearForm() {
    this.form.reset();
  }
  addItem() {
    const value = this.form.value;
    const newItem = new Ingredient(value.name, value.amount);

    if (this.editingMode) {
      this.slService.editIngredient(this.editingIndex, newItem);
      this.editingMode = false;
    } else {
      this.slService.addIngredient(newItem);
    }
    this.clearForm();
  }
  removeItem() {
    const value = this.form.value;
    const newItem = new Ingredient(value.name, value.amount);
    this.slService.removeIngredient(newItem);
    this.clearForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
