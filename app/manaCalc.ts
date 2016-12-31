import {Observable, EventData} from 'data/observable';
import { screen } from 'platform';
import { Image } from 'ui/image';

export class ManaCalc extends Observable {
  private total: number;
  private lands: number;

  constructor(private nonLands?: number, private results?: string) {
    super({nonLands: nonLands, results: results});

    this.total = 0;
    this.lands = 0;
  }

  public onTap(args: EventData) {
    if(this.nonLands == null){
      this.lands = 0;
      return;
    }

    this.total = this.nonLands / 23 * 40;
    this.lands = this.total - this.nonLands;

    this.results = `You need ${this.lands.toFixed(2)} and ${this.total.toFixed(2)} total cards.`;
  }
}