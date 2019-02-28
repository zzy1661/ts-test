enum Color {Red = 1, Green = 3, Blue = "aaaa"}
let colorName: string = Color['aaaa'];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2