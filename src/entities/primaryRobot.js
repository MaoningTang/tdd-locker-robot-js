export default class PrimaryRobot {
  constructor(lockers) {
    this.lockers = lockers;
  }

  deposit(luggage) {
    const result = depositLuggageToAvailableLocker(this.lockers, luggage);

    if (!result) {
      return 'The lockers are full.'
    }

    return result;
  }

  pickup(ticket) {
      if (!this.lockers[ticket.lockerNumber]) {
          return 'Invalid Ticket';
      }

      return this.lockers[ticket.lockerNumber].pickup(ticket);
  }
}

const depositLuggageToAvailableLocker = (lockers, luggage) =>
    lockers.reduce((acc, locker, index) => {
      if (acc) {
        return acc;
      }

      const result = locker.deposit(luggage);

      if (result.number != null) {
        acc = { ...result, lockerNumber: index };
      }

      return acc;
    }, undefined);
