# Tasking

- Given a robot; When user deposit a luggage; Then return a ticket.
- Given a robot without available locker; When user deposit a luggage; Then return a full locker message.
- Given a robot with valid ticket; When user pickup; Then return the correct luggage.
- Given a robot with invalid ticket; When user pickup; Then return a invalid ticket message.

- Given a robot with available lockers, when user deposit a luggage; Then save it to max capacity locker.
- Given a robot with lockers have equal max capacity, when user deposit a luggage; Then save it to the first max capacity locker.
