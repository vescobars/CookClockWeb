import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'  
  },
  {
    path: 'recipe',
    component: RecipeComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    pathMatch: 'full'
  },
  {
    path: 'summary',
    component: RecipeSummaryComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
