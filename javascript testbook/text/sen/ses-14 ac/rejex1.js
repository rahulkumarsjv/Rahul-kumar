const pattern=/hello/;

console.log(pattern.test('hello'));
console.log(pattern.test('hello 123'));
console.log(pattern.test('hello world'));
console.log(pattern.test(' world'));

const input ="world";
if(pattern.test(input)){
    console.log('pattern mateched');
}else{
    console.log('you dat must starts with hello');
}