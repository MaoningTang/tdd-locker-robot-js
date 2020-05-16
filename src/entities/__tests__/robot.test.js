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
