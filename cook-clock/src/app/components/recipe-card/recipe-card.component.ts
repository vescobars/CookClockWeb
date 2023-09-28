import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  
    constructor(private router: Router) {}

    navigateRecipe() {
      this.router.navigate(["recipe"]);
    }
}
