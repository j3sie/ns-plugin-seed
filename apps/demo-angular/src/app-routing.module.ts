import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'input-textfield', loadChildren: () => import('./plugin-demos/input-textfield.module').then(m => m.InputTextfieldModule) },
	{ path: 'mytest', loadChildren: () => import('./plugin-demos/mytest.module').then(m => m.MytestModule) },
	{ path: 'simple', loadChildren: () => import('./plugin-demos/simple.module').then(m => m.SimpleModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
