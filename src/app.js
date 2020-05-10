export default class Locker {
  constructor(maxSize) {
    this.boxes = {};
    this.maxSize = maxSize;
  }

  deposit() {
    if (Object.keys(this.boxes).length === this.maxSize) {
      return 'The locker is full.';
    }

    const password = Math.random();
    const number = Object.keys(this.boxes).length;
    const data = { password, number };

    this.boxes[number] = data;

    return data;
  }

  pickup(ticket) {
    return 'Pickup successfully';
  }
}
