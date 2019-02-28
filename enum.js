var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color["Blue"] = "aaaa";
})(Color || (Color = {}));
var colorName = Color['aaaa'];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
