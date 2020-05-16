import Locker from './locker';

export default class Robot {
  constructor() {
    this.lockers = [new Locker(4)];
  }

  deposit(luggage) {
    const ticket = this.lockers[0].deposit(luggage);

    return { ...ticket, lockerNumber: 0 }
  }
}
