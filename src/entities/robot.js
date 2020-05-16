import Locker from './locker';

const DEFAULT_LOCKER_SIZE = 4;

export default class Robot {
  constructor() {
    this.lockers = [new Locker(DEFAULT_LOCKER_SIZE), new Locker(DEFAULT_LOCKER_SIZE)];
  }

  deposit(luggage) {
    return this.lockers.reduce((acc, locker, index) => {
      if (acc) {
        return acc;
      }

      const result = locker.deposit(luggage);

      if (result.number != null) {
        acc = { ...result, lockerNumber: index };
      }

      return acc;
    }, undefined);
  }
}
