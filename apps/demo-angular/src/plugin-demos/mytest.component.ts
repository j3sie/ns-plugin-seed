import { Component, NgZone } from '@angular/core';
import { DemoSharedMytest } from '@demo/shared';
import { } from '@nativescript/mytest';

@Component({
	selector: 'demo-mytest',
	templateUrl: 'mytest.component.html',
})
export class MytestComponent {
  
  demoShared: DemoSharedMytest;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMytest();
  }

}