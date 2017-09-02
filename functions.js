function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 3));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum('3', '3'));
function getName(firstName, lastName) {
    if (lastName == null) {
        return firstName;
    }
    return firstName + " is a " + lastName + " person";
}
console.log(getName('john'));
function myVoid() {
    return;
}
console.log(myVoid());
