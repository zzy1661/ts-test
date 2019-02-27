// function GET(url: string) {
//     console.log('get declar')
//     return function (target, methodName: string, descriptor: PropertyDescriptor) {
//         console.log('get decorator')
//         !target.$Meta && (target.$Meta = {});
//         target.$Meta[methodName] = url;
//     }
// }

// class HelloService {
//     constructor() { }
//     @GET("xx")
//     getUser() { }
// }

// console.log((<any>HelloService).$Meta);