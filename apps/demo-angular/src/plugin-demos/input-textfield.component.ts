import { Component, NgZone } from '@angular/core';
import { DemoSharedInputTextfield } from '@demo/shared';
import { } from '@nativescript/input-textfield';

@Component({
	selector: 'demo-input-textfield',
	templateUrl: 'input-textfield.component.html',
})
export class InputTextfieldComponent {
  
  demoShared: DemoSharedInputTextfield;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedInputTextfield();
  }

}