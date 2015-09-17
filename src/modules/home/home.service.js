import angular from 'angular';

class RandomNames {
  constructor() {
    this.names = ['Dat', 'Hung', 'Thinh', 'Loan'];
  }

  getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }
}

export default angular.module('home.service', [])
  .service('randomNames', RandomNames)
  .name;