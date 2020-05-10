export default class Locker {
  constructor(maxSize) {
    this.boxes = [];
    this.maxSize = maxSize;
  }

  deposit(luggage) {
    if (this.boxes.length === this.maxSize) {
      return 'The locker is full.';
    }

    return {
      number: this.boxes.push(luggage),
      password: Math.random(),
    };
  }
}
