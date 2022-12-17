import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesBookComponent } from './recipes-book/recipes-book.component';
import { RecipeDetailComponent } from './recipes-book/recipes-list/recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './recipes-book/recipes-list/recipes-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipes-book/recipes-list/recipe-item/recipe-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from 'src/shared/dropdown.directive';
import { RouterModuleModule } from './router-module/router-module.module';
import { RecipeService } from './recipes-book/recipe.service';
import { RecipesStartComponent } from './recipes-book/recipes-list/recipes-start/recipes-start.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesBookComponent,
    RecipeDetailComponent,
    RecipesListComponent,
    HeaderComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipesStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModuleModule,
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
