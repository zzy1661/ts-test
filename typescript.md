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






## TypeScript (what)
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

## 解决的问题（why）



