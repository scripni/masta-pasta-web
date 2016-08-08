import { Component } from '@angular/core';

export class Ingredient {
	id: number;
	name: string;
}

export class Recipe {
	id: number;
	name: string;
	ingredients: Ingredient[];
}

@Component({
  selector: 'masta-pasta',
  templateUrl: 'views/app.html'
})
export class AppComponent {
	title = 'Masta Pasta';
	recipe: Recipe = {
		id: 1,
		name: 'Pasta',
		ingredients: [
			{
				id: 1,
				name: 'Rosemary'
			},
			{
				id: 2,
				name: 'Bacon'
			}
		]
	};
}