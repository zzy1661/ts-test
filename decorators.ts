function GET(url: string) {
    console.log('get declar')
    return function (target, methodName: string, descriptor: PropertyDescriptor) {
        console.log('get decorator')
        !target.$Meta && (target.$Meta = {});
        target.$Meta[methodName] = url;
    }
}
class A {
    name: string = "A's name";
    do():void {
        console.log('doing')
    }
}
function S(name:string) {
    return function(target,propertyKey):void {
        console.log('s===',target,propertyKey)
        target[propertyKey] = new A()
    }
}

class HelloService {
    @S('xx')
    name:A;
    constructor() { }
    @GET("xx")
    getUser() { }
}

console.log((<any>HelloService).$Meta);
console.log(new HelloService().name)