function searchIndex(array,num) {
    const res = array.findIndex(function(value){return value==num})
    return res;
}

console.log(searchIndex([1,2,3,4,5,6,7,8,9,10],5));
console.log(searchIndex([11,12,13,14,15,16,17,18,19,20],12));
console.log(searchIndex([3,6,9,12,18,19,20,25,27,30],30));