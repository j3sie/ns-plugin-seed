import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'input-textfield'
	},
	{
		name: 'mytest'
	},
	{
		name: 'simple'
	}
];
}