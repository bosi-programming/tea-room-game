export class Character {
  private _name: string;
  private _assets: {
    normal: string;
    happy: string;
    smile: string;
    smug: string;
    annoyed: string;
  };
  private _currentAsset: string;
  private _likes: string[] = [];
  private _dislikes: string[] = [];

  constructor(name: string, type: string, likes: string[], dislikes: string[]) {
    this._name = name;
    this._assets = {
      normal: `./assets/characters/${type}-normal.png`,
      happy: `./assets/characters/${type}-happy.png`,
      smile: `./assets/characters/${type}-smile.png`,
      smug: `./assets/characters/${type}-smug.png`,
      annoyed: `./assets/characters/${type}-annoyed.png`,
    };
    this._currentAsset = this._assets.normal;
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
    switch (points) {
      case 0:
        this._currentAsset = this._assets.normal;
        break;
      case 1:
        this._currentAsset = this._assets.smile;
        break;
      case 2:
        this._currentAsset = this._assets.happy;
        break;
      case -1:
        this._currentAsset = this._assets.annoyed;
        break;
      case -2:
        this._currentAsset = this._assets.smug;
        break;
    }

    return points;
  }

  public get currentAsset(): string {
    return this._currentAsset;
  }
  public set currentAsset(value: string) {
    this._currentAsset = value;
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

export const characters = [
  new Character('Momo', 'girl-1', ['weak', 'mellow'], ['strong', 'velvety']),
  new Character('Nia', 'girl-2', ['weak', 'velvety'], ['dark', 'sweet']),
  new Character('Kai', 'boy-1', ['dark', 'strong'], ['sweet', 'mellow']),
  new Character('Kleverson', 'boy-2', ['sweet', 'mellow'], ['strong', 'dark']),
  new Character('Mio', 'woman', ['strong', 'dark'], ['refreshing', 'weak']),
];
