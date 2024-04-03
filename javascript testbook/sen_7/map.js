const array =[1,2,3,4,5,6,7,8,9];


const newArray = array.map(
    function(value){
        return value*2;
    }
)

console.log("Original Array", array);
console.log(newArray);