let endDate = "31 Dec 2024 09:00:00 PM";
let audio1 = new Audio('mp3/Crowd Cheering Happy New Year Sound Effect.mp3');
let audio2 = new Audio('mp3/Firework Sound Effect _ No Copyright Sound.mp3');
// let endDate = "27 December 2022 08:06:00 PM";
let div = document.getElementsByClassName("time");
let msg = document.getElementsByTagName("h1")[0];

const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
    if(diff<0){
        dummy()
        return;
    } 
    div[0].innerHTML = Math.floor(diff/3600/24);
    div[1].innerHTML = Math.floor(diff/3600%24);
    div[2].innerHTML = Math.floor(diff/60%60);
    div[3].innerHTML = Math.floor(diff%60);
}
let id = setInterval(clock,1000);
function dummy(){
    msg.innerText = "HAPPY NEW YEAR";
    // console.log(msg);
    audio1.play();
    audio2.play();
    clearInterval(id);
}
// clearInterval(clock);
