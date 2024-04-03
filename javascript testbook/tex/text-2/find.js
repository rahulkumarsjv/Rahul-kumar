function search (array,num) {
    const res=array.find(function(value){
        return value==num
    })
    if(res){
        console.log(`${res} found`);
    }else{
        console.log(`${num} found`);
    }
}

search([1,2,3,4,5,6,7,8,9,],6);
search([10,11,12,13,14,15,16,17,18,],30);
search([11,11,22,33,44,55,66,77,88,],50);