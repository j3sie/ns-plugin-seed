import { Component, NgZone } from '@angular/core';
import { DemoSharedSimple } from '@demo/shared';
import { } from '@nativescript/simple';

@Component({
	selector: 'demo-simple',
	templateUrl: 'simple.component.html',
})
export class SimpleComponent {
  
  demoShared: DemoSharedSimple;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSimple();
  }

}