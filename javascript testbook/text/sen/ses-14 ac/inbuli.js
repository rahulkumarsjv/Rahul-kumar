const data = "hello Alll";

try{
    const obj = JSON.parse(data);
    console.log(obj);
}catch (error){
    console.log(error.message);
}