import Locker from './locker';

const DEFAULT_LOCKER_SIZE = 4;

export default class Robot {
  constructor(maxLockers) {
    this.lockers = getArrayFillWithLocker(maxLockers)
  }

  deposit(luggage) {
    const result = this.lockers.reduce((acc, locker, index) => {
      if (acc) {
        return acc;
      }

      const result = locker.deposit(luggage);

      if (result.number != null) {
        acc = { ...result, lockerNumber: index };
      }

      return acc;
    }, undefined);

    if (!result) {
      return 'The lockers are full.'
    }

    return result;
  }
}

const getArrayFillWithLocker = (length) => {
  const array = [];
  for (let i =0; i < length; i++) {
    array.push(new Locker(DEFAULT_LOCKER_SIZE));
  }

  return array;
};
