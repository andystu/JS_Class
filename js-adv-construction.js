// --- User constructor to create object
function Vehicle(color){
    this.color = color;
}

Vehicle.prototype.run = function(){
    return 'boom';
}

// 1. 'new' create an empty object
// 2. inheret all properties from prototype
// 3. set this to object

var v = new Vehicle('Blue');
// create obj using Object.create(Vehicle.prototype)
// Set this to be obj
// Excute Vehicle

console.log(v.color);
console.log(Object.getPrototypeOf(v));
console.log(v.constructor);

// function <--> object

function Car(color){
    Vehicle.call(this, color);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.hank = function(){
    return 'vroom';
}
var v = new Car('White');
Car.prototype.constructor = Car;
console.log(v.hank());
console.log(v instanceof Car);
console.log(v instanceof Vehicle);


//create obj 4 ways
// 1. var a = {}
// 2. 
// 3. 
// 4. Closure, ex: createCounter