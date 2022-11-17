import dataProvider from '../dataProvider/providers.js';

export default class Score {
  constructor(name, score) {
    this.id = null;
    this.name = name;
    this.score = score;
  }

  static add = (name, score) => dataProvider.save(new Score(name, score));

  static getAll = () => dataProvider.getAll(Score);

  static removeAll = () => dataProvider.removeAll(Score);
}
