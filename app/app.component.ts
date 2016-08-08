import { Component } from '@angular/core';

export class Recipe {
	id: number;
	name: string;
}

@Component({
  selector: 'masta-pasta',
  templateUrl: 'views/app.html'
})
export class AppComponent {
	title = 'Masta Pasta';
	recipe: Recipe = {
		id: 1,
		name: 'Pasta'
	};
}