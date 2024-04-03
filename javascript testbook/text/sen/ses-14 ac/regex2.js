const pattern = /[a-z]/;  
console.log(pattern.test("text"));
console.log(pattern.test("rahul"));
console.log(pattern.test("kumar"));
console.log(pattern.test("text1"));

const pattern1=/[A-Z]{1}[a-z]/;
console.log(pattern1.test('rahul'));

const pattern2=/[a-z]at/;
console.log(pattern2.test('caaa'));
console.log(pattern2.test('bat'));
console.log(pattern2.test('tat'));
console.log(pattern2.test('Aat'));
