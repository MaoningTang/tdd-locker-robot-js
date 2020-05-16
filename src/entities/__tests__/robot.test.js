import Robot from '../robot';

let realRandom;

beforeEach(() => {
  realRandom = Math.random;
  Math.random = jest.fn().mockReturnValue('foo');
})

afterEach(() => {
  Math.random = realRandom;
})

test('should return a ticket when deposit a luggage given a robot', () => {
  const robot = new Robot(1);

  const ticket = robot.deposit({});

  expect(ticket).toEqual({
    lockerNumber: 0,
    number: 0,
    password: 'foo',
  });
});

test('should save luggage to first available locker when deposit a luggage given a robot', () => {
  const robot = new Robot(2);
  robot.deposit({});
  robot.deposit({});
  robot.deposit({});
  robot.deposit({});

  const ticket = robot.deposit({});

  expect(ticket).toEqual({
    lockerNumber: 1,
    number: 0,
    password: 'foo',
  });
});

test('should return a full locker message when user deposit a luggage given a robot without available locker' , () => {
  const robot = new Robot(1);
  robot.deposit({});
  robot.deposit({});
  robot.deposit({});
  robot.deposit({});

  const ticket = robot.deposit({});

  expect(ticket).toEqual('The lockers are full.');
});

test('should return return the correct luggage when user user pickup with valid ticket' , () => {
  const robot = new Robot(1);
  const ticket = robot.deposit({ foo: 'bag' });

  const luggage = robot.pickup(ticket);

  expect(luggage).toEqual({ foo: 'bag' });
});
