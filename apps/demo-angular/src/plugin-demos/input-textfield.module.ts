import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { InputTextfieldComponent } from './input-textfield.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: InputTextfieldComponent }])],
  declarations: [InputTextfieldComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class InputTextfieldModule {}
