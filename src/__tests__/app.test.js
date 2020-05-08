import Locker from '../app';

test('should print a ticket with a password when user deposit a luggage given a locker with empty boxes', () => {
  Math.random = jest.fn().mockReturnValue('foo');
  const locker = new Locker();

  const ticket = locker.deposit({});

  expect(ticket).toEqual({
    number: 1,
    password: 'foo',
  });
});
