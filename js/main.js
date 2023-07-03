const roy = document.querySelectorAll(".swiper-wrapper .pic");
const musicPiece = document.querySelector(".music-btn");
const playerFrame = document.querySelector(".play");
const play_backBtn = document.querySelector(".bi-box-arrow-in-right");

let recommanded =[
    {name: "Atomic Habit", author: "Jomes Clear", path: "../script/atomic-habit.txt"}
]


roy.forEach(e => {
    e.addEventListener("click", () => {
        if(e.classList.contains("atomic-habit")){
            musicPiece.classList.add("active");
            playerFrame.style.transform = "translateX(0)";
            fetchFile(recommanded[0]["path"]);
        }
    })
})

musicPiece.addEventListener("click", () => {
    playerFrame.style.transform = "translateX(0)";
})

play_backBtn.addEventListener("click", () => {
    playerFrame.style.transform = "translateX(100%)";
})


// fetching text file to char
let fetchFile = path => {
    Promise.all([
        fetch(path)
            .then(x => x.text())
            .then(text => sayIt(text))
    ]).then(([sampleResp, sample2Resp]) => {
        console.log(sampleResp);
        console.log(sample2Resp)
    })
}



// checking web support speech or not
if('speechSynthesis' in window){
	console.log("Web Speech API supported!")
} else {
	console.log("Web Speech API not supported :-(")   
}

// test the speech function
let recogn = () => {
    const synth = window.speechSynthesis
    return synth;
}

let sayIt = x => {
    let text = x;
    const utterThis = new SpeechSynthesisUtterance(text)
    recogn().speak(utterThis)
}

let cancel = () => {
    recogn().cancel();
}

let pause = () => {
    recogn().pause();
}

// cancel() => to stop;
// pause() => to pause;
// for progress bar => utterThis.rate = rate.value;