export default class Locker {
  constructor(maxSize) {
    this.boxes = [];
    this.maxSize = maxSize;
  }

  deposit(luggage) {
    if (this.boxes.length == this.maxSize){
      const errorMessage = 'The locker is full.';
      return errorMessage;
    }
    return {
      number: this.boxes.push(luggage),
      password: Math.random(),
    };
  }
}
