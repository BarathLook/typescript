"use strict";
var person = {
    name: "John",
    age: 30,
};
console.log(person); // Output: { name: 'John', age: 30 }
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color); // Output: 1 (index of Green in the enum)
// Tuples
var tuple = ["John", 25];
console.log(tuple); // Output: [ 'John', 25 ]
// Unknown
var unknownValue = 10;
if (typeof unknownValue === "number") {
    var num = unknownValue;
    console.log(num); // Output: 10
}
// Never
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Something went wrong");
}
catch (error) {
    //console.error(error.message); // Output: Something went wrong
}
// Function that never returns
function infiniteLoop() {
    while (true) {
        // Infinite loop
    }
}
//   let result: never = infiniteLoop();
//   console.log(result); // This line will never be reached
//union type
function printID(id) {
    console.log("ID: ".concat(id));
}
printID(123);
printID("ABC");
var employee1 = {
    name: "John Doe",
    role: "Developer",
    age: 30,
};
console.log(employee1);
var employee2 = {
    name: "Jane Smith",
    role: "Designer",
    age: 25,
};
console.log(employee2);
var partialUser = {
    name: 'John',
};
console.log(partialUser); // { name: 'John' }
var readonlyUser = {
    id: 1,
    name: 'Alice',
    age: 25,
};
var userSubset = {
    name: 'Charlie',
    age: 30,
};
console.log(userSubset); // { name: 'Charlie', age: 30 }
var userWithoutAge = {
    id: 2,
    name: 'Eve',
};
console.log(userWithoutAge); // { id: 2, name: 'Eve' }
var userRecord = {
    'user1': { id: 3, name: 'Grace', age: 28 },
    'user2': { id: 4, name: 'David', age: 35 },
};
console.log(userRecord);
var value = true;
var nonNullableNumber = 42;
console.log(nonNullableNumber); // 42
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 10);
console.log("Area of the rectangle: ".concat(rectangle.getArea()));
