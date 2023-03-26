var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
// console.log(xiaoming.age)
console.log(Math.max(3, 4, 5))