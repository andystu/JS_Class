var obj = {
    name: 'Andy'
}

// inherent method
var child_obj = Object.create(obj);
console.log(obj);
console.log(child_obj);
child_obj.name = 'Max';
console.log(child_obj);
console.log(child_obj.name);
console.log(child_obj.__proto__.name);
// proto chain: self -> proto of parent -> prot of parent ....

console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));


