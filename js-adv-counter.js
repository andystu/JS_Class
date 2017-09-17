// module example
function createCounter(){
    var n = 0;
    function prettyMessage(){
        return 'The current counter is ' + n;
    }
    return {
        increment: function(){
            n+=1;
        },
        getValue: function(){
            return prettyMessage();
            // return n;
        }
    };
}
var counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());
// not define is not undefined