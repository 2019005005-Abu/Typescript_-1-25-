console.log("I am a Typescript Developer");
var apples = 5;
console.log(apples);
var speed = 'fast';
console.log(speed);
var hasName = true;
var nothibgMuch = null;
var unde = undefined;
console.log(hasName, nothibgMuch, unde);
var now = new Date();
console.log(now);
//Array
var colors = ['red', 'green', 'blue'];
var numbers = [100, 200, 300, 400, 600];
var isBool = [true, false, true, true];
console.log(colors);
console.log(numbers);
console.log(isBool);
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//object Literals
var point = {
    x: 10,
    y: 20
};
var MyBio = {
    firstName: "Rifat",
    lastName: "Shahriar",
    age: 25,
    qualification: "Bsc in IT",
    Profession: "Software Engineer"
};
console.log(MyBio);
//Function
var LogNumber = function (i) {
    console.log(i);
};
var addsum = function (a, b) {
    return a + b;
};
console.log(addsum(10, 20));
//when to use annotations
//1.Function that returs the 'any type'
var json = '{"x":10,"y":20,"z":20}';
var coordinate = JSON.parse(json);
console.log(coordinate);
//any
//2)When we declare a variable on one line
//and initalizete ite later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
