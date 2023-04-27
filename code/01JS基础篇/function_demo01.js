'use strict'
// reduce demo
function string2int(s) {
    var arr = [];
    for (let i of s) {
        arr.push(i * 1);
    };
    return arr.reduce(function (x, y) {
        return x * 10 + y;
    });
}
// filter demo
var arr = [-1, -9, 1, 8, 7];
var r = arr.filter(function (x){
    return x % 2 === 0;
})
var a
a = string2int("1234");
console.log(a);
console.log(r)