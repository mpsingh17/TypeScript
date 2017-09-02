var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log(this.name + " has been created with email " + this.email);
    }
    Person.prototype.register = function () {
        // return this.name;
        console.log(this.name + ' is registered');
    };
    Person.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return Person;
}());
// let person = new Person('Manpreet', 'test@test.com', 23);
// person.register();
// console.log(person.age);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(city, name, email, age) {
        var _this = 
        //super is calling constructor of parent class.
        _super.call(this, name, email, age) || this;
        _this.city = city;
        console.log(_this.name + " is in " + _this.city);
        return _this;
    }
    //calling method from parent class using super.
    Member.prototype.payInvoices = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(Person));
var manpreet = new Member("Auckland", "Manpreet", "test@tes.com", 23);
manpreet.payInvoices();
