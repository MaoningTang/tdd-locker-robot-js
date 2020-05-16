import Robot from '../robot';

test('should return a ticket when deposit a luggage given a robot', () => {
  Math.random = jest.fn().mockReturnValue('foo');
  const robot = new Robot();

  const ticket = robot.deposit({});

  expect(ticket).toEqual({
    lockerNumber: 0,
    number: 0,
    password: 'foo',
  });
});

test('should save luggage to first available locker when deposit a luggage given a robot', () => {
  Math.random = jest.fn().mockReturnValue('foo');
  const robot = new Robot();
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
