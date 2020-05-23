import PrimaryRobot from '../primaryRobot';
import Locker from '../locker';

let realRandom;

beforeEach(() => {
  realRandom = Math.random;
  Math.random = jest.fn().mockReturnValue('foo');
});

afterEach(() => {
  Math.random = realRandom;
});

test('should return a ticket when deposit a luggage given a primary robot', () => {
  const robot = new PrimaryRobot([new Locker(1)]);

  const ticket = robot.deposit({});

  expect(ticket).toEqual({
    lockerNumber: 0,
    number: 0,
    password: 'foo',
  });
});

test('should save luggage in order when deposit a luggage given a primary robot with available locker', () => {
  const fullLocker = new Locker(1);
  fullLocker.deposit({});
  const availableLocker = new Locker(1);
  const robot = new PrimaryRobot([fullLocker, availableLocker]);
  const expectedSavedLuggage = { foo: 'bar' };

  const ticket = robot.deposit(expectedSavedLuggage);

  expect(availableLocker.pickup(ticket)).toEqual(expectedSavedLuggage);
});

test('should return a full locker message when user deposit a luggage given a primary robot without available locker', () => {
  const robot = new PrimaryRobot([new Locker(1)]);
  robot.deposit({});

  const ticket = robot.deposit({});

  expect(ticket).toEqual('The lockers are full.');
});

test('should return the correct luggage when user pickup given a primary robot and a valid ticket', () => {
  const robot = new PrimaryRobot([new Locker(1)]);
  const ticket = robot.deposit({ foo: 'bag' });

  const luggage = robot.pickup(ticket);

  expect(luggage).toEqual({ foo: 'bag' });
});

test('should return a invalid ticket message when user pickup given a primary robot and a invalid ticket', () => {
  const robot = new PrimaryRobot([new Locker(1)]);
  robot.deposit({});

  const message = robot.pickup({
    lockerNumber: 100,
    number: 0,
    password: 'foo',
  });

  expect(message).toEqual('Invalid Ticket');
});
