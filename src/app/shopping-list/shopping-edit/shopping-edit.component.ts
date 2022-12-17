import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ingredient } from 'src/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() onNewItem = new EventEmitter<Ingredient>();
  @Output() onRemoveItem = new EventEmitter<Ingredient>();
  form = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(0, [
      Validators.required,
      Validators.pattern(/\d+/g),
    ]),
  });
  clearForm() {
    this.form.patchValue({
      name: '',
      amount: 0,
    });
  }
  addItem() {
    this.onNewItem.emit(
      new Ingredient(this.form.value.name, this.form.value.amount)
    );
    this.clearForm();
  }
  removeItem() {
    this.onRemoveItem.emit(
      new Ingredient(this.form.value.name.trim(), this.form.value.amount)
    );
    this.clearForm();
  }
}
