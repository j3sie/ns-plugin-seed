import { DemoSharedBase } from '../utils';
import { Simple } from '@nativescript/simple';

export class DemoSharedSimple extends DemoSharedBase {

  testIt() {
    // console.log('test simple!');
    Simple.sayHello();
  }
}