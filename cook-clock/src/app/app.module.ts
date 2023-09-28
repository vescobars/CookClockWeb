import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { FormsModule } from '@angular/forms';
import { AlarmComponent } from './components/alarm/alarm.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesComponent,
    RecipeSummaryComponent,
    NavbarComponent,
    HomeComponent,
    RecipeCardComponent,
    AlarmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
