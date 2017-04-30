var should = require('should');
var Assertion = should.Assertion;

should.extend('应该', Object.prototype); // should 别名

['是', '个', '并且'].forEach(function(name) { // 属性别名
    Assertion.addChain(name);
});

// 方法别名
Assertion.alias('not', '不');
Assertion.alias('equal', '等于');
Assertion.alias('Number', '数字');
Assertion.alias('String', '字符串');

// 测试例子
(5).应该.等于(5).并且.是.个.数字();
'5'.应该.等于('5').并且.是.个.字符串();
// (5).应该.等于(5).并且.不.是.个.数字();

console.log('完成!');
