var n = Math.ceil(Math.random() * 100)
var x = 0, y = 1;
var arr = [], count = 2;
arr.push(0);
arr.push(1);

function fibgen(n) {
     for (var i = 0; i <= n; i++){
          arr[count] = sum(arr[count-1], arr[count-2]);
     }
     return arr;
}

function sum(x, y) {
     return x + y;
}
var attr = document.querySelector("p").getAttribute("style");
console.log(attr);