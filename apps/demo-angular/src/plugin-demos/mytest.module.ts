import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MytestComponent } from './mytest.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MytestComponent }])],
  declarations: [MytestComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MytestModule {}
