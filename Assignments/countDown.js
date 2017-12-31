function countDown(num){
    var interval = setInterval(function(){
        if (num > 1){
            num--;
            console.log("Timer:", num);
        } else {
            console.log("Ring, Ring, Ring");
            clearInterval(interval);
        }
    }
    , 1000);
}

countDown(3);