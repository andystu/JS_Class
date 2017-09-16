function Stack(){
    // Initial stack is empty
    this._arr = [];
}

Stack.prototype.push = function(obj){
    this._arr.push(obj);
    // Your code goes here
};

Stack.prototype.pop = function(){
    this._arr.pop();
    // Your code goes here
}

Stack.prototype.isEmpty = function(){
    // Return true if there is no element in the stack
    return (this._arr.length > 0)? true : false;
}

// Verify if a string has proper open and closing parentheses
function hasRightParentheses(str){
    // Your code goes here
    var stk = new Stack();
    var str_length = str.length;
    var status = true;
    // console.log('length:' + str_length);
    if(str_length > 0){
        for(var i=0; i < str_length; i++){
            // console.log('str:' + str[i]);
            if(str[i]=='('){
                stk.push('(');
            }else if(str[i]==')'){
                if(stk._arr.length > 0){
                    stk.pop();
                }else{
                    // console.log('status -> false');
                    status = false;
                }
            }
        }
        // console.log('final status ==> ' + status);
        return (stk._arr.indexOf('(') == -1 && status == true)? true : false;
    }else{
        return false;
    }
}



(function test_check_parentheses(){
    console.log(hasRightParentheses('sdsdsd')==true?'passed':'failed');
    console.log(hasRightParentheses('(nicolas)')==true?'passed':'failed');
    console.log(hasRightParentheses('((joe)')==true?'passed':'failed');
    console.log(hasRightParentheses('((joe))))')==true?'passed':'failed');
    console.log(hasRightParentheses('(joe)(smith)')==true?'passed':'failed');
})();
