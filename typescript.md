# typescript

```typescript
@HTTP.POST({
		url: `${GLOBAL_CONFIG._GET_API_DOMAIN_}/account/login`
	})
	_fetchAccountLogin_: HTTPInterface.POST<{
		data: {
			staffId: number;
			token: string;
			menu: [{id: number; name: string; pid: number; zindex: number; istype: number}];
			function: [{id: number; name: string; pid: number; zindex: number; istype: number}];
			button: [{id: number; name: string; pid: number; zindex: number; istype: number}];
		};
	}>;
```

1.注解

2.interface.POST<o> 泛型





## 解决的问题（why）


## TypeScript (what)
设计目标：1. 静态地识别可能是错误的构造。
		2. 为代码大片段提供结构化机制。
		3. 干净，惯用，可识别的JavaScript代码
		4. 生成一种可组合且易于推理的语言
		5. 与当前和未来的ECMAScript提案保持一致
		。。。
## how
强类型： java
method: 没有独立的method
class:  class Dog{
  String breed;
  int age;
  String color;
   String barking(){
   	return '汪汪汪'；
  }
  void setAge(int age) {
	
	}
  void hungry(){
  }
}
声明： int x = 0; String str = "aaa";

### 装饰器
	什么装饰什么成什么？
	本质：函数
	被装饰的：类、方法、属性和参数，常见的是类和方法

### 装饰器和注解以及元数据编程
装饰器的定位是通过对应的装饰函数，修改内容本身的定义，从而实现不同的行为。
A decorator is just a function that gives you access to the target that needs to be decorated.所以函数的参数里有个target
而注解并不产生任何行为，仅仅添加附加内容，需要相应的 Scanner 读取并识别其中的内容，从而使得 Scanner 自身产生不同的行为。
Annotations,一种向类声明添加元数据以供依赖注入或编译指令使用的方法
使用装饰器，我们可以构建注释
reflect-mata

angular中的@Component
```
import { 
  ComponentMetadata as Component,
} from '@angular/core';

@Component({
  selector: 'tabs',
  template: `
    <ul>
      <li>Tab 1</li>
      <li>Tab 2</li>
    </ul>
  `
})
export class Tabs {

}
```
var Tabs = (function () {
  function Tabs() {}

  Tabs.annotations = [
    new ComponentMetadata({...}),
  ];

  return Tabs;
})
坑：
ts的装饰器和tc39的装饰器不是一个东西

装饰器参数：target,key,value-->属性描述符{
	configurable: true 能否delete，能否把数据属性修改为访问器属性
    enumerable: true 表示能否通过for-in循环返回属性
    value: 属性值
    writable: true，表示能否修改属性值
    get:f(),
    set:f()
}

分为数据属性描述符和访问器属性描述符，不同点：value/writable;get/set
interface 的使用

declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;


any/namespace/declare的使用
namespace java的package
namespace 和 模块