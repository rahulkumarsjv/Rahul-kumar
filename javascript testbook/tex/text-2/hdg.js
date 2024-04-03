const array =[1,2,3,4,5,6,7,8,9,]

const newArray = array.map(function(value){
    return value * 3;
});
console.log(newArray);

const names = ["A","B","C"]
console.log(names);
names.forEach(function(value){
    console.log(value);
});