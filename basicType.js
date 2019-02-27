//boolean
var isDone = false;
//number
var decLiteral = 6;
//string
var str = "bob";
//array
var list = [1, 2, 3];
//tuple
var x = ['2', 1];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//any
var notSure = 4;
//void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
// null/undefined
var u = undefined;
var n = null;
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
//类型断言
var someValue = "this is a string";
var strLength = someValue.length;
