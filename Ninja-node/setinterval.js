// Set time in interval 
time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + 'Secound passed');
    if (time > 5){
        clearInterval(timer);
    }
},2000);