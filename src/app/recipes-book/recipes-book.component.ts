import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes-book',
  templateUrl: './recipes-book.component.html',
  styleUrls: ['./recipes-book.component.css'],
  providers: [RecipeService],
})
export class RecipesBookComponent {
  currentRoute: Subscription;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentRoute = this.route.params.subscribe((params: Params) => {});
    console.log(this.route.snapshot.paramMap);
  }
}
