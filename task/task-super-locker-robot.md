# Tasking

- Given a robot with one locker; When user deposit a luggage; Then return a ticket.
- Given a robot with one full locker; When user deposit a luggage; Then return a full locker message.
- Given a robot with one locker and a valid ticket; When user pickup; Then return the correct luggage.
- Given a robot with one locker and a invalid ticket; When user pickup; Then return a invalid ticket message.
- Given a robot with three lockers and lockerB has max vacancy rate, when user deposit a luggage; Then save it lockerB.
- Given a robot with three lockers and lockerA and lockerB has equal vacancy rate, when user deposit a luggage; Then save it to lockerA.
