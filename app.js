function playSong(){
    var audio = new Audio('audio/hoho.mp3')
    audio.play();
}

const days  = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const currentYear = new Date().getFullYear();
const timeMachineTime=new Date('October 15 2009 00:00:00')

//update countdown time
function updateTime(){
    const currentTime = new Date();
    const diff = timeMachineTime - currentTime;
    const d = Math.floor(diff/1000/60/60/24)
    const h = Math.floor(diff/1000/60/60) % 24
    const m = Math.floor(diff/1000/60) % 60
    const s = Math.floor(diff/1000)% 60
    console.log(d + " " + h + " " + m + " "+ s)
    const day = d-d-d;
    const hour = h-h-h;
    const minute = m-m-m;
    const second = s-s-s;
    days.innerHTML = day;
    hours.innerHTML = hour<10 ? '0'+ hour : hour;
    minutes.innerHTML = minute<10 ? '0'+ minute : minute;
    seconds.innerHTML = second<10 ? '0'+ second : second;
}

setInterval(updateTime, 1000);

updateTime();