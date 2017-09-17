// 'use strict';

var a = 100; 
function foo(a){    
    console.log(a);
    // function foo2(){
    //     console.log(a);
    // }
    // foo2();
}

foo(300);
console.log(a);
// local -> params -> parent

// immediate excution function
(function f1(){
    var current = 1, scope1 = 'Scope 1';
    console.log(current);
    (function f2(){
        var current = 2, scope2 = 'Scope 2';
        console.log(current);
        console.log(scope1 + '   ' + scope2);
    })();
})();
