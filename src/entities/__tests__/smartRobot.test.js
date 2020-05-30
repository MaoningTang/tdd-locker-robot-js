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

test('should return a ticket when deposit a luggage given a smart robot with one locker', () => {
  const robot = new SmartRobot([new Locker(1)]);

  const ticket = robot.deposit({});

  expect(ticket).toEqual({
    lockerNumber: 0,
    number: 0,
    password: 'foo',
  });
});

test('should return a full locker message when user deposit a luggage given a smart robot with one full locker', () => {
  const robot = new SmartRobot([new Locker(1)]);
  robot.deposit({});

  const ticket = robot.deposit({});

  expect(ticket).toEqual('The lockers are full.');
});

test('should return the correct luggage when user pickup given a smart robot with one locker and a valid ticket', () => {
  const robot = new SmartRobot([new Locker(1)]);
  const ticket = robot.deposit({ foo: 'bag' });

  const luggage = robot.pickup(ticket);

  expect(luggage).toEqual({ foo: 'bag' });
});

test('should return a invalid ticket message when user pickup given a smart robot with one locker and a invalid ticket', () => {
  const robot = new SmartRobot([new Locker(1)]);
  robot.deposit({});

  const message = robot.pickup({
    lockerNumber: 100,
    number: 0,
    password: 'foo',
  });

  expect(message).toEqual('Invalid Ticket');
});


test('should save luggage to lockerB when user deposit a luggage given a robot with three lockers and lockerB has max capacity', () => {
  const lockerB = new Locker(3);
  const robot = new SmartRobot([new Locker(1), lockerB, new Locker(2)]);
  const expectedSavedLuggage = { foo: 'bar' };

  const ticket = robot.deposit(expectedSavedLuggage);

  expect(lockerB.pickup(ticket)).toEqual(expectedSavedLuggage);
});

test('should save luggage to lockerA when user deposit a luggage given a robot with three lockers and lockerA and lockerB has equal max capacity', () => {
  const lockerA = new Locker(3);
  const lockerB = new Locker(3);
  const robot = new SmartRobot([new Locker(2), lockerA, lockerB]);
  const expectedSavedLuggage = { foo: 'bar' };

  const ticket = robot.deposit(expectedSavedLuggage);

  expect(lockerA.pickup(ticket)).toEqual(expectedSavedLuggage);
});
