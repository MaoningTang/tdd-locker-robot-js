export default class Locker {
  constructor() {
    this.boxes = [];
  }

  deposit(luggage) {
    return {
      number: this.boxes.push(luggage),
      password: Math.random(),
    };
  }
}
