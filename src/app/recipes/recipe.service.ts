import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()

    private recipes : Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Reel_and_Brand_-_September_2021_-_Sarah_Stierch_05.jpg',[
          new Ingredient('Meat',1),
          new Ingredient('French Fries',2)
        ]),
        new Recipe('A Test Recipe1','This is simply a test1', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',[
          new Ingredient('Buns',1),
          new Ingredient('Meat',2)
        ])
      ]

      constructor(private slService : ShoppingListService){

      }

      getRecipes(){
        return this.recipes.slice()
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]){
          this.slService.addIngredients(ingredients)
      }
}