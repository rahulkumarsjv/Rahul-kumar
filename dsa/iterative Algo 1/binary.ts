function binarySearch(arr: number[], tar:number): number{
    let n = arr .length;
    let i=0;
    let r = n- 1;


while(1 <= r){
    let mid = Math.floor((1 + r)/ 2);
    if (arr[mid] == tar){
        return mid;
    }else if (arr[mid] < tar){
        i= mid +1;
    }else{
        r = mid -1;
    }
}
return -1
}

let arr = [10, 20,30,]
let target = 456;
let idx = binarySearch(arr, target)
console.log(idx);
