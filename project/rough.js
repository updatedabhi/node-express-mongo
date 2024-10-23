// let str = 'Abhishek is good boy and he is honest too.';

// str = str.replace(/\b(is|too|boy)\b/g, (isFind) => `$${isFind}`);
// console.log(str);

// let name = 'My name is Abhishek';
// name = name.replace('Abhishek', 'Ketan');
// console.log(name);

const obj = {
  name: 'Abhishek',
  age: 34,
  occupation: 'Developer',
};

console.log(obj['name']);

const keyword = ['age', 'name', 'city'];
keyword.forEach((el) => delete obj[el]);

console.log(obj);
