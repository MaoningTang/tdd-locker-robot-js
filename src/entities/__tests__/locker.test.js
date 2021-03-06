import Locker from '../locker';

test('should print a ticket when user deposit a luggage given a locker with empty boxes', () => {
  Math.random = jest.fn().mockReturnValue('foo');
  const locker = new Locker({});

  const ticket = locker.deposit();

  expect(ticket).toEqual({
    number: 0,
    password: 'foo',
  });
});

test('should notify locker is full when user deposit a luggage given a full locker', () => {
  const locker = new Locker(0);

  const message = locker.deposit({});

  expect(message).toEqual('The locker is full.');
});

test('should return the correct luggage when user enter a valid ticket given a locker with luggage', () => {
  const locker = new Locker(1);
  const ticket = locker.deposit({ foo: 'bag' });

  const luggage = locker.pickup(ticket);

  expect(luggage).toEqual({ foo: 'bag' });
});

test('should expire ticket when user enter a valid ticket twice given a locker with luggage', () => {
  Math.random = jest.fn().mockReturnValue('foo');
  const locker = new Locker(2);
  const ticket = locker.deposit({});
  locker.deposit();
  expect(ticket).toEqual({
    number: 0,
    password: 'foo',
  });

  locker.pickup(ticket);
  const message = locker.pickup(ticket);

  expect(message).toEqual('Invalid Ticket');
});

test('should notify wrong ticket when user enter an invalid ticket given a locker', () => {
  const locker = new Locker(1);
  const ticket = locker.deposit({});

  const message = locker.pickup({ number: ticket.number, password: 'fake' });

  expect(message).toEqual('Invalid Ticket');
});

test('should return available capacity when get available capacity given a locker', () => {
  const locker = new Locker(3);
  const luggage = { foo: 'bar' };
  locker.deposit(luggage);

  const availableCapacity = locker.getAvailableCapacity();

  expect(availableCapacity).toEqual(2);
});
