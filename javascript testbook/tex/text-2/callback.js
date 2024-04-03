function fun1() {
    console.log("function 1 excuted");
}
function fun2(cb) {
setTimeout(function ()
{console.log("function 2 excuted");cb;},
3000
)
}
function fun3() {
    console.log("function 3 excuted");
}
fun1();
fun2(fun3);