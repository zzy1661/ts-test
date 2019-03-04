var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function GET(url) {
    console.log('get declar');
    return function (target, methodName, descriptor) {
        console.log('get decorator');
        !target.$Meta && (target.$Meta = {});
        target.$Meta[methodName] = url;
    };
}
var A = /** @class */ (function () {
    function A() {
        this.name = "A's name";
    }
    A.prototype.do = function () {
        console.log('doing');
    };
    return A;
}());
function S(name) {
    return function (target, propertyKey) {
        console.log('s===', target, propertyKey);
        target[propertyKey] = new A();
    };
}
var HelloService = /** @class */ (function () {
    function HelloService() {
    }
    HelloService.prototype.getUser = function () { };
    __decorate([
        S('xx')
    ], HelloService.prototype, "name", void 0);
    __decorate([
        GET("xx")
    ], HelloService.prototype, "getUser", null);
    return HelloService;
}());
console.log(HelloService.$Meta);
console.log(new HelloService().name);
