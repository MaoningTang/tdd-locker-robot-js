import SmartRobot from '../smartRobot';
import Locker from '../locker';

let realRandom;

beforeEach(() => {
  realRandom = Math.random;
  Math.random = jest.fn().mockReturnValue('foo');
});

afterEach(() => {
  Math.random = realRandom;
});

test('should return a ticket when deposit a luggage given a smart robot', () => {
  const robot = new SmartRobot([new Locker(1)]);

  const ticket = robot.deposit({});

  expect(ticket).toEqual({
    lockerNumber: 0,
    number: 0,
    password: 'foo',
  });
});

test('should return a full locker message when user deposit a luggage given a smart robot without available locker', () => {
  const robot = new SmartRobot([new Locker(1)]);
  robot.deposit({});

  const ticket = robot.deposit({});

  expect(ticket).toEqual('The lockers are full.');
});

test('should return the correct luggage when user pickup given a smart robot and a valid ticket', () => {
  const robot = new SmartRobot([new Locker(1)]);
  const ticket = robot.deposit({ foo: 'bag' });

  const luggage = robot.pickup(ticket);

  expect(luggage).toEqual({ foo: 'bag' });
});

test('should return a invalid ticket message when user pickup given a smart robot and a invalid ticket', () => {
  const robot = new SmartRobot([new Locker(1)]);
  robot.deposit({});

  const message = robot.pickup({
    lockerNumber: 100,
    number: 0,
    password: 'foo',
  });

  expect(message).toEqual('Invalid Ticket');
});


test('should save luggage to the max available capacity locker when user deposit a luggage given a robot with available lockers', () => {
  const maxAvailableCapacityLocker = new Locker(3);
  const robot = new SmartRobot([new Locker(1), maxAvailableCapacityLocker, new Locker(2)]);
  const expectedSavedLuggage = { foo: 'bar' };

  const ticket = robot.deposit(expectedSavedLuggage);

  expect(maxAvailableCapacityLocker.pickup(ticket)).toEqual(expectedSavedLuggage);
});
