import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSimple } from '@demo/shared';
import {  } from '@nativescript/simple';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSimple {
	
}
