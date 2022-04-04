import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedInputTextfield } from '@demo/shared';
import { } from '@nativescript/input-textfield';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedInputTextfield {
	
}
