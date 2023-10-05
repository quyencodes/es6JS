// var -> scoped to the function, let -> scoped to the block, const -> block but also cannot change immutable data
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  // console.log(i);
}

const person1 = {
  name: 'quyen',
  walk() {},
  talk(x = 'default name') {
    console.log('hi', x);
  },
};

// sayHello();
// person.talk();
// person['talk']('quyen');

// binding this
const person2 = {
  name: 'quyen',
  walk() {
    console.log(this);
  },
};

// person.walk();
const walk = person2.walk.bind(person2);
walk();
