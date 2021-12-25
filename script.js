
//we could have used moment.js also but i found native functions to be more easy to understand
function getDifferenceInMs(date1, date2) {
    // const diffInMs = Math.abs(date2 - date1);
    const diffInMs = date2 - date1;
    return diffInMs;
}
//recurion here is giving "Uncaught RangeError: Maximum call stack size exceeded"
function setTime(){
    const date1 = new Date();//cur date and time by default
    const date2 = new Date('2/19/2022');//my birth date
    //console.log(getDifferenceInMs(date1, date2));

    //For Days

    //console.log(Math.floor(getDifferenceInMs(date1, date2)/(1000*3600*24)));
    var days=Math.floor(getDifferenceInMs(date1, date2)/(1000*3600*24));
    document.querySelector("#days").innerHTML=days;

    //For Hours

    //console.log(Math.floor((getDifferenceInMs(date1, date2)/(1000*60*60))%24));
    var hours=Math.floor((getDifferenceInMs(date1, date2)/(1000*60*60))%24);
    document.querySelector("#hours").innerHTML=hours;

    //For Mins

    //console.log(Math.floor((getDifferenceInMs(date1, date2)/(1000*60))%60));
    var mins=Math.floor((getDifferenceInMs(date1, date2)/(1000*60))%60);
    document.querySelector("#mins").innerHTML=mins;

    //For Secs

    //console.log(Math.floor(getDifferenceInMs(date1, date2)/(1000)%60));
    var seconds=Math.floor(getDifferenceInMs(date1, date2)/(1000)%60);
    document.querySelector("#seconds").innerHTML=seconds;

    //setTime();
}
//setTime();
setTime();
setInterval(setTime, 1000);//after every second
//TO vERIFY : https://www.timeanddate.com/countdown/birthday?iso=20220219T00&p0=1041&msg=Fahad+Khan%27s+birthday&font=cursive
