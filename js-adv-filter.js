// filter
Array.prototype.filter = function(fn){
    console.log('------filter: Andy Version----------');
    var res = [];
    for(var i=0;i<this.length;i++){
        if (fn(this[i])){
            res.push(this[i]);            
        }
    }
    return res;
}

var arr = [10,12,20,5]

var res = arr.filter(function(x){
    return x > 5;
});
console.log(res);

var arr = ['Toronto','New York','Ottawa']
var res = arr.filter(function(x){
    return x == 'Toronto';
});
console.log(res);

var res = arr.filter(function(x){
    return x != 'Toronto';
});
console.log(res);

// sort
/*
Array.prototype.sort = function(fn){

}
*/

var arr = [
    {
        firstName: 'Joe',
        age: 40
    },
    {
        firstName: 'John',
        age: 20
    },
    {
        firstName: 'Josh',
        age: 30
    }
]
arr.sort(function(a,b){
    return a.age < b.age;
});
console.log(arr);

