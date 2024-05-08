// ## Counter without setInterval


let count = 0;

const timer = function(){
    console.log(`timer : ${count}`);
    count++;
    setTimeout(timer, 1000);
};

timer();