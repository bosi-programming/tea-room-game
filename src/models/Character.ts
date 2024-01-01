export class Character {
  private _name: string;
  private _assets: {
    happy: string;
    smile: string;
    smug: string;
    annoyed: string;
  };
  private _likes: string[] = [];
  private _dislikes: string[] = [];

  constructor(name: string, type: string, likes: string[], dislikes: string[]) {
    this._name = name;
    this._assets = {
      happy: `./assets/characters/${type}-happy.png`,
      smile: `./assets/characters/${type}-smile.png`,
      smug: `./assets/characters/${type}-smug.png`,
      annoyed: `./assets/characters/${type}-annoyed.png`,
    };
    this._likes = likes;
    this._dislikes = dislikes;
  }

  public points(characteristics: string[]): number {
    let points = 0;
    characteristics.forEach((characteristic) => {
      if (this._likes.includes(characteristic)) {
        points++;
      } else if (this._dislikes.includes(characteristic)) {
        points--;
      }
    });
    return points;
  }

  public get name(): string {
    return this._name;
  }
  public get assets(): {
    happy: string;
    smile: string;
    smug: string;
    annoyed: string;
  } {
    return this._assets;
  }
}
