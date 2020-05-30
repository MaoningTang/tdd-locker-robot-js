export default class SuperRobot {
  constructor(lockers) {
    this.lockers = lockers;
  }

  deposit(luggage) {
    const maxAvailableCapacityLocker = findMaxAvailableCapacityLocker(this.lockers);
    if (!maxAvailableCapacityLocker.availableCapacity) {
      return 'The lockers are full.';
    }

    const result = maxAvailableCapacityLocker.locker.deposit(luggage);
    return { ...result, lockerNumber: maxAvailableCapacityLocker.index};
  }

  pickup(ticket) {
    if (!this.lockers[ticket.lockerNumber]) {
      return 'Invalid Ticket';
    }

    return this.lockers[ticket.lockerNumber].pickup(ticket);
  }
}

function findMaxAvailableCapacityLocker(lockers) {
  return lockers
      .map((v, index) => ({locker: v, availableCapacity: v.getAvailableCapacity(), index}))
      .reduce((max, v) => max.availableCapacity < v.availableCapacity ? v : max)
}
