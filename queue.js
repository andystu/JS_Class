var assert = require('assert');

function Queue(){
    this._arr = [];
}

Queue.prototype.enqueue = function(item){
    this._arr.push(item);
};

Queue.prototype.dequeue = function(){
    var obj;
    if (this._arr.length > 0){
        obj = this._arr[0];        
        this._arr.shift();
        return obj;
    }else{
        console.log('no item in queue!');
    }
    // return 'a';
};



(function test_queue(){
    var q = new Queue();

    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');

    assert.equal('a',q.dequeue());
    assert.equal('b',q.dequeue());
    assert.equal('c',q.dequeue());

})();