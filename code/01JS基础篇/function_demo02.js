function late_sum(arr){
    var sum = function () {
        return arr.reduce(function (x,y){
            return x + y;
        });
    }
    return sum;
}
var date = new Date();
years = date.getFullYear();
months = date.getMonth();
days = date.getDay();
date_time = date.getDate();
time = date.getTime();
console.log(years, date_time, months);
console.log(time);