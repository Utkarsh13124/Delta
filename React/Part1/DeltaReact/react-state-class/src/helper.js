export function genTicket(n){
    let arr = new Array(n);
    for(let i = 0 ; i < n ; i++ ){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

export function sum(arr){
    return arr.reduce((total, num) => total + num, 0);
};