function checkAge() {
    if(age<18){
        throw new Error('not a valid age')
    }
    console.log('valid user can vote');
}
try{
    checkAge(16);
}catch (error){
    console.log('error occured whille cheking age');
    console.log(error.message);
}finally{
    console.log('program copleted');
}