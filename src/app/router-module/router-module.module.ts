import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RecipesBookComponent } from '../recipes-book/recipes-book.component';
import { RecipeDetailComponent } from '../recipes-book/recipes-list/recipe-detail/recipe-detail.component';
import { RecipesStartComponent } from '../recipes-book/recipes-list/recipes-start/recipes-start.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: 'recipes',
    component: RecipesBookComponent,
    children: [
      { path: '', component: RecipesStartComponent },
      { path: ':id', component: RecipeDetailComponent },
    ],
    // pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RouterModuleModule {}
