//boolean
let isDone: boolean = false;
//number
let decLiteral: number = 6;
//string
let str: string = "bob";
//array
let list: number[] = [1,2,3];
//tuple
let x: [string, number] = ['2',1];
//enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
//any
let notSure: any = 4;
//void
function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = undefined;
//可选
interface SquareConfig {
    color?: string;
    width?: number;
  }
// null/undefined
let u: undefined = undefined;
let n: null = null;
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
//object
declare function create(o: object | null): void;
//类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;