// the value of this
// this -> who invoke the function
// 
function root(){
    console.log(this);
}
// root();

var p = {
    name: 'John',
    speak: function(){
        console.log(this.name);
    }
}

p.speak();
// this is node global this now
var speak = p.speak;
speak();

// use other function
var p2 = {
    name: 'Andy'
}
p2.speak = p.speak;
p2.speak();

// get undefined
var p1 = {
    name: 'John',
    langs: ['C++','C','Java','Ruby','JS','Python'],
    speak: function(){
        this.langs.forEach(function(lang){
            console.log(this.name + 'knows' + lang);
        })
    }
}
p1.speak();

// solve undefined issue
var p1 = {
    name: 'John',
    langs: ['C++','C','Java','Ruby','JS','Python'],
    speak: function(){
        this.langs.forEach(function(lang){
            console.log(this.name + ' knows ' + lang);
        })
    },
    // arrow function -> ES 6 support
    speak_adv: function(){
        console.log(this.langs);
        this.langs.forEach((lang)=>{
            console.log(this.name + ' knows ' + lang);
        });
    }

}
p1.speak();
p1.speak_adv();


var p2 = {
    name: 'Andy',
    langs: ['C#','Javascript']
};

// Apply / Call
// call binding (args are passed one by one)
p1.speak_adv.call(p2);
var arr = ['a', 'd', 'c', 'f', 'b'];
var res = Array.prototype.sort.call(arr);
console.log(res);
// apply binding (args are passed by array)
function add(x,y){
    console.log(this);
    return x + y;
}
console.log(add.call(p2,1,2));
console.log(add.apply(p2,[1,2]));