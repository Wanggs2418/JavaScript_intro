'use strict'

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
// 指定按照缩进输出
// 第二个参数用于控制如何筛选对象的键值，可以用函数处理或者指定输入的属性
var s = JSON.stringify(xiaoming, null, '    ');
console.log(s);


// 反序列 JSON.parse,第二个参数可为函数
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});

console.log(obj);