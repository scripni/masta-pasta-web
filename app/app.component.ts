import { Component } from '@angular/core';

export class Recipe {
	id: number;
	name: string;
}

@Component({
  selector: 'masta-pasta',
  template: `
  <h1>{{title}}</h1>
  <h2>{{recipe.name}} details</h2>
  <div><label>id:</label>{{recipe.id}}</div>
  <div>
  	<label>name:</label>
  	<input [(ngModel)]="recipe.name" placeholder="name" />
  </div>
  `
})
export class AppComponent {
	title = 'Masta Pasta';
	recipe: Recipe = {
		id: 1,
		name: 'Pasta'
	};
}