import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SimpleComponent } from './simple.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SimpleComponent }])],
  declarations: [SimpleComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class SimpleModule {}
