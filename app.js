



let countDownDate = new Date("april 1 ,2024 00:00:00").getTime();
let x = setInterval(() => {

    let now = new Date().getTime();
    let distance = countDownDate- now ;

    let day =( Math.floor(distance / (1000 * 60 * 60 * 24)) <10?"0":"")+  Math.floor(distance / (1000 * 60 * 60 * 24)) ;
    let hour =(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))<10?"0":"")+   Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60 ));
    let sec = Math.floor(distance % (1000 * 60 ) / (1000 ));

    let dayValue=document.querySelector("#day").innerHTML=day;
let hourValue=document.querySelector("#hour").innerHTML=hour;
let minValue=document.querySelector("#min").innerHTML=min;
let secValue=document.querySelector("#sec").innerHTML=sec;
     

}, 1000)



