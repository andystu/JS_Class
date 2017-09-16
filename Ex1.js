// (*) Determine if an number is an odd number
function isOdd(num){
    var n = Math.abs(num);
    return (n % 2) == 1;
}

// (*) Return true if a number is even
function isEven(num){
  var n = Math.abs(num);
  return (n % 2) == 0;
}


// (*) Find the largest number of the input array
function max(arr){
  var tmp_max = 0;
  for(var i = 0; i < arr.length; i++){
      if(arr[i]> tmp_max){
        tmp_max = arr[i];
      }
  }
  return tmp_max;
}

// (*) Find the sum of the input array
// Ex [10,30,50] => 90
function sum(arr){
  var sum_val = 0;
  for(var i = 0; i < arr.length; i++){
    sum_val += arr[i];
  }
  return sum_val;
}

// (**) Sum the odd numbers in the input array
// Ex [3, 6, 8, 7] =>10
function sumOdds(arr){
  var sum_val = 0;
  for(var i = 0; i < arr.length; i++){
    var n = Math.abs(arr[i]);
    if((n % 2) == 1){
      sum_val += arr[i];
    }
  }
  return sum_val;
}


// (***)  Reverse a string
// Ex "abcd" => "dcab"
function reverse(str){
  var rstr = [];
  for(var i=1; i <= str.length; i++){
    // console.log(str.length - i);
    index = str.length - i;
    rstr.push(str[index]);
  }
  return rstr;
}

// (***) Sort an array with ascending order
// Ex [8, 5, 10, 1] => [1,5,8,10]
function sort(arr){
  var tmp = 0;
  for(var i=0; i < arr.length; i++){
    for(var j=0; j< arr.length - 1; j++){
      if(arr[j]> arr[j+1]){
        tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
  return arr;
}

function repeat(str, num){
  for(var i=0; i < num; i++){
    console.log(str);
  }
}

function findNumOccurances(str, strSearch){
  var c = 0;
  for(var i=0; i < str.length; i++){
    if (str[i] == strSearch){
        c++;
    }
  }
  return c;
}

function findNumOccurances2(str, strSearch){
  var c = 0;
  var pos = str.indexOf(strSearch);
  while(pos > -1){
        ++c;
        pos = str.indexOf(strSearch,++pos);
  }
  return c;
}


(function test(){
  int_arr = [4,5,6,3,2,10,8];
  console.log(isOdd(10));
  console.log(isEven(10));
  console.log("Max:" + max(int_arr));
  console.log("Sum:" + sum(int_arr));
  console.log("SumOdd:" + sumOdds(int_arr));
  console.log("Reverse:" + reverse('Hello!'));
  console.log(sort(int_arr));
  repeat('Hello World!',10);
  console.log(findNumOccurances('Hello World!', 'l'));
  console.log(findNumOccurances2('Hello World, World','World'));
})();
