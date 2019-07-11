//function in node js

function sayhi(){
    console.log('HI');
}

sayhi()

// function is declared in variable

var saybye = function(){
    console.log('BYE');
}

saybye();


// Calling the function using another function

function function_one(){
    console.log('Another function is called');
}

function callback(fun){
    fun();
}

callback(function_one);