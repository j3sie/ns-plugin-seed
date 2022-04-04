import { Observable } from '@nativescript/core';

export class SimpleCommon extends Observable {
    static sayHello() {
        console.log('say hello');
    }
}
