var person = {
  firstName: 'Derek',
  lastName: 'Cruz',
  hobby: 'Bikes'
};
console.log('Value of person', person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);

person.job = 'Unemployed';
console.log('The person\'s current job is:', person.job);

person.previousJob = 'Toyota';
console.log('The person\'s pervious job is:', person.previousJob);

console.log('The complete person object:', person);

var myCar = {
  make: 'Honda',
  model: 'Civic SI',
  year: '2010'
};
console.log('Car Information', myCar);

myCar['owner'] = fullName;

var description = 'My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';
console.log(description);

myCar['color'] = 'Black';
console.log('My full car info:', myCar);
