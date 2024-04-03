const person={
    name: "Rahul kumar",
    email:"pancard4886@gmail.com",
    contry:"india",
    address:"xyz,india"
}
console.log(person);
person.age=45;//added new property
person.contry="us";// update existing propery 
delete person.address; // remove existing property
console.log(person);