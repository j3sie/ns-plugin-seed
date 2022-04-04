import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMytest } from '@demo/shared';
import { } from '@nativescript/mytest';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMytest {
	
}
