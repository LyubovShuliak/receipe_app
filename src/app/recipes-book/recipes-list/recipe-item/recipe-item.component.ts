import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../../receipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  currentRoute: Subscription;
  @Input() recipe: Recipe;
  @Input() index: number;
}
