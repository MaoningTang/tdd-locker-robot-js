export default class Locker {
  constructor(maxSize) {
    this.boxes = {};
    this.maxSize = maxSize;
  }

  deposit(luggage) {
    if (Object.keys(this.boxes).length === this.maxSize) {
      return 'The locker is full.';
    }

    const ticket = { password: Math.random(), number: Object.keys(this.boxes).length };

    this.boxes[ticket.number] = { ticket, luggage };

    return ticket;
  }

  pickup(ticket) {
    const savedData = this.boxes[ticket.number];
    if (!savedData || savedData.ticket.password !== ticket.password) {
      return 'Invalid password';
    }

    delete this.boxes[ticket.number];
    return savedData.luggage;
  }
}
