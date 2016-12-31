import {Observable, EventData} from 'data/observable';
import { screen } from 'platform';
import { Image } from 'ui/image';

export class ManaCalc extends Observable {
  private total: number;
  private lands: number;

  constructor(private nonLands?: number, private results?: string, 
    private black?: number, private blue?: number, private white?: number, private green?: number, private red?: number,
    private resultsBlack?: string, private resultsBlue?: string, private resultsWhite?: string,
    private resultsGreen?: string, private resultsRed?: string) {
    super({nonLands, results, black, blue, white, green, red, resultsBlack, resultsBlue, resultsWhite, resultsGreen, resultsRed});

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

    this.results = `You need ${this.lands.toFixed(2)} lands and ${this.total.toFixed(2)} total cards.`;

    this.resultsBlack = this.calcLandPercentage(this.black);
    this.resultsBlue = this.calcLandPercentage(this.blue);
    this.resultsWhite = this.calcLandPercentage(this.white);
    this.resultsGreen = this.calcLandPercentage(this.green);
    this.resultsRed = this.calcLandPercentage(this.red);
  }

  private calcLandPercentage(land?: number): string {
    return land != null ? (this.lands * (land / this.nonLands)).toFixed(2) : '';
  }
}