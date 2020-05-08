export default class Locker {
  constructor() {
    this.boxes = [];
  }

  deposit(luggage) {
    const number = this.boxes.push(luggage);
    return {
      number,
      password: Math.random(),
    };
  }
}
