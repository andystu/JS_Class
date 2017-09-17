function add(x,y){
    return x+y;
}
function add_by_n(x){
    return function(y){
        return x + y ;
    }
}
var a = add_by_n(1);
console.log(a(2));

function x_y_sq(x){
    return function(y){
        return x*x + y*y ;
    }
}
var b = x_y_sq(2);
console.log(b(3));

var adds = [];
for(var i=0; i<5; i++){
    // adds[i] = add_by_n(i);
    adds.push(add_by_n(i));
}
adds.forEach(function(add){
    console.log(add(5));
});