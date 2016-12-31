import { Observable, EventData } from 'data/observable';
import * as view from 'ui/core/view';  
import * as label from 'ui/label';  

export class ManaCalc extends Observable {
  private total: number;
  private lands: number;

  constructor(private nonLands?: number, private results?: string, 
      private black?: string, private blue?: string, private white?: string, private green?: string, private red?: string,
      private resultsBlack?: string, private resultsBlue?: string, private resultsWhite?: string,
      private resultsGreen?: string, private resultsRed?: string,
      private validationVisibility?: string, private validationMessage?: string) {
    super({
      nonLands, results, black, blue, white, green, red,
      resultsBlack, resultsBlue, resultsWhite, resultsGreen, resultsRed,
      validationVisibility, validationMessage
    });

    this.total = 0;
    this.lands = 0;
    this.validationVisibility = 'collapsed';
  }

  public onTap(args: EventData) {
    if(this.nonLands == null){
      this.lands = 0;
      return;
    }

    this.total = this.nonLands / 23 * 40;
    this.lands = this.total - this.nonLands;

    this.results = `You need ${this.lands.toFixed(2)} lands and ${this.total.toFixed(2)} total cards.`;

    if ((parseInt(this.black) || 0) + (parseInt(this.blue) || 0) + (parseInt(this.white) || 0) +
      (parseInt(this.green) || 0) + (parseInt(this.red) || 0) > this.nonLands) {
      this.validationVisibility = 'visible';
      this.validationMessage = `cards per type must equal ${this.nonLands}`;
    } else {
      this.validationVisibility = 'collapsed';
    }

    this.resultsBlack = this.calcLandPercentage(this.black);
    this.resultsBlue = this.calcLandPercentage(this.blue);
    this.resultsWhite = this.calcLandPercentage(this.white);
    this.resultsGreen = this.calcLandPercentage(this.green);
    this.resultsRed = this.calcLandPercentage(this.red);
  }

  private calcLandPercentage(land: string): string {
    return (this.lands * ((parseInt(land) || 0) / this.nonLands)).toFixed(2);
  }
}