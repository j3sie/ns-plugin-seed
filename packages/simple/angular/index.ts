import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { Simple } from '@nativescript/simple';

@NgModule()
export class NativeScriptSimpleModule {}

// Uncomment this line if the package provides a custom view component
registerElement('Simple', () => Simple);
