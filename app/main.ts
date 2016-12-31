import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { ManaCalc } from './manaCalc';

var model = new ManaCalc();

export function onLoaded(args: EventData) {
  let page = <Page>args.object;

  page.bindingContext = model;
}