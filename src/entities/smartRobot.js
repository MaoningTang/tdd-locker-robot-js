export default class SmartRobot {
  constructor(lockers) {
    this.lockers = lockers;
  }

  deposit(luggage) {
    const maxAvailableCapacityLocker = findMaxAvailableCapacityLocker(this.lockers);

    const result = maxAvailableCapacityLocker.locker.deposit(luggage);
    if(result === 'The locker is full.') {
      return 'The lockers are full.';
    }

    if (result.number == null) {
      return result;
    }

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
