export default class Locker {
  constructor(maxSize) {
    this.boxes = {};
    this.maxSize = maxSize;
  }

  deposit() {
    if (Object.keys(this.boxes).length === this.maxSize) {
      return 'The locker is full.';
    }

    const data = { password: Math.random(), number: Object.keys(this.boxes).length };

    this.boxes[data.number] = data;

    return data;
  }

  pickup(ticket) {
    if (!Object.keys(this.boxes).length) {
      return 'The locker is empty.';
    }

    const savedTicket = this.boxes[ticket.number]
    if (!savedTicket || savedTicket.password !== ticket.password) {
      return 'Invalid password';
    }

    delete this.boxes[ticket.number];
    return 'Pickup successfully';
  }
}
