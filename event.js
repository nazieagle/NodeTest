var util=require('util');
var EventEmitter=require('events').EventEmitter;
function Person(){

}
util.inherits(Person,EventEmitter);

var p=new Person();
p.on('上菜', function (name) {
    console.log('吃'+name);
})
p.once('结账', function () {
    p.removeAllListeners('上菜');
    console.log('结账');
})

p.emit('上菜','鸡');
p.emit('上菜','鱼');

p.emit('结账');