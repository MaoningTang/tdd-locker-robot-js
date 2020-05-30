export default class SuperRobot {
  constructor(lockers) {
    this.lockers = lockers;
  }

  deposit(luggage) {
    const maxVacancyRateLocker = findMaxVacancyRateLocker(this.lockers);
    if (!maxVacancyRateLocker.availableCapacity) {
      return 'The lockers are full.';
    }

    const result = maxVacancyRateLocker.locker.deposit(luggage);
    return { ...result, lockerNumber: maxVacancyRateLocker.index};
  }

  pickup(ticket) {
    if (!this.lockers[ticket.lockerNumber]) {
      return 'Invalid Ticket';
    }

    return this.lockers[ticket.lockerNumber].pickup(ticket);
  }
}

function findMaxVacancyRateLocker(lockers) {
  return lockers
      .map((v, index) => ({locker: v, availableCapacity: v.getAvailableCapacity(), vacancyRate: v.getVacancyRate(), index}))
      .reduce((max, v) => max.vacancyRate < v.vacancyRate ? v : max)
}
