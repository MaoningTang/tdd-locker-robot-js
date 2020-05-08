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

test('should notify locker is full when user deposit a luggage given a full locker', () => {
  const locker = new Locker(0);

  const message = locker.deposit({});

  expect(message).toEqual('The locker is full.');
});