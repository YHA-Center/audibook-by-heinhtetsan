const roy = document.querySelectorAll(".swiper-wrapper .pic");
const musicPiece = document.querySelector(".music-btn");
const playerFrame = document.querySelector(".play");
const play_backBtn = document.querySelector(".for-play");
const read_backBtn = document.querySelector(".for-read");
const search_backBtn = document.querySelector(".for-search");
const read_content_backBtn = document.querySelector(".for-read-content");
const playBtn = document.querySelector(".bi-play-circle");
const pauseBtn = document.querySelector(".bi-pause-circle");
const closeBtn = document.querySelector(".bi-x-circle");
const volumeIcon = document.querySelector(".bi-volume-up");
const volume = document.querySelector(".volume");
const rangeBar = document.querySelector("#range");
const rangeControl = document.querySelector("#range2");
const read_playBtn = document.querySelector(".btn-gp .play-audio");
const read_readBtn = document.querySelector(".btn-gp .read-book");
const summary = document.querySelector(".read .summ-content");
const readBoook = document.querySelector(".read-content .summ-content");
const readBox = document.querySelector(".read");
const readNovel = document.querySelector(".read .read-book");
const readContent = document.querySelector(".read-content");
const asideBtns = document.querySelectorAll(".aside-btn");
const searchCont = document.querySelector(".search-box");
const settingCont = document.querySelector(".setting-box");
const settingBack = document.querySelector(".for-setting");
const gearBtn = document.querySelector(".setting");

let recommanded =[
    {name: "Atomic Habit", author: "Jomes Clear", path: "../script/atomic-habit.txt"}
]

let script = "";
let volu;

musicPiece.addEventListener("click", () => {
    playerFrame.style.transform = "translateX(0)";
})

play_backBtn.addEventListener("click", () => {
    playerFrame.style.transform = "translateX(100%)";
})

// for read
read_backBtn.addEventListener("click", () => {
    readBox.style.transform = "translateX(100%)";
})

read_content_backBtn.addEventListener("click", () => {
    readContent.style.transform = "translateX(100%)";
})

// setting 

settingBack.addEventListener("click", () => {
    settingCont.style.transform = "translateX(100%)";
})

gearBtn.addEventListener("click", () => {
    settingCont.style.transform = "translateX(0%)";
})

search_backBtn.addEventListener("click", () => {
    searchCont.style.transform = "translateX(100%)";
    document.querySelector(".home").classList.add("active");
    document.querySelector(".search").classList.remove("active");
})

// aside btn
asideBtns.forEach(e => {
    e.addEventListener("click", () => {
        asideBtns.forEach(i => {
            i.classList.remove("active");
        })
        if(e.classList.contains("search")){
            e.classList.add("active");
            searchCont.style.transform = "translateX(0)";
        }
        if(e.classList.contains("home")){
            e.classList.add("active");
            searchCont.style.transform = "translateX(100%)";
        }
    })
})

// summary
Promise.all([
    fetch("../script/at-summ.txt")
        .then(x => x.text())
        .then(text => {
            summary.textContent = text;
        })
]).then(([sampleResp, sample2Resp]) => {
    console.log(sampleResp);
    console.log(sample2Resp)
})
Promise.all([
    fetch("../script/at-summ.txt")
        .then(x => x.text())
        .then(text => {
            readBoook.textContent = text;
        })
]).then(([sampleResp, sample2Resp]) => {
    console.log(sampleResp);
    console.log(sample2Resp)
})


// playing the audio
roy.forEach(e => {
    e.addEventListener("click", () => {
        if(e.classList.contains("atomic-habit")){
            readBox.style.transform = "translateX(0%)";
        }
    })
})

// 
read_playBtn.addEventListener("click", () => {
    musicPiece.classList.add("active");
    readBox.style.transform = "translateX(100%)";
    playerFrame.style.transform = "translateX(0)";
    playBtn.classList.add("d-none");
    pauseBtn.classList.remove("d-none");
    fetchFile(recommanded[0]["path"]);
})

//
readNovel.addEventListener("click", () => {
    readBox.style.transform = "translateX(100%)";
    playerFrame.style.transform = "translateX(100%)";
    readContent.style.transform = "translateX(0%)";
})


// pause the audio
pauseBtn.addEventListener("click", () => {
    playBtn.classList.remove("d-none");
    pauseBtn.classList.add("d-none");
    pause_audio();
})

// resume audio
playBtn.addEventListener("click", () => {
    playBtn.classList.add("d-none");
    pauseBtn.classList.remove("d-none");
    recogn().resume();
})


// terminate the audio
closeBtn.addEventListener("click", () => {
    playerFrame.style.transform = "translateX(100%)";
    musicPiece.classList.remove("active");
    cancel_audio();
})

// fetching text file to char
let fetchFile = path => {
    Promise.all([
        fetch(path)
            .then(x => x.text())
            .then(text => {
                sayIt(text);
            })
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

let utterThisFunction = (x) => {
    let text = x;
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.volume = changeVolume();
    return utterThis;
}

let sayIt = (x) => {
    const text = utterThisFunction(x);
    recogn().speak(text)
}

let cancel_audio = () => {
    recogn().cancel();
}

let pause_audio = () => {
    recogn().pause();
}

// changing the volume 
volumeIcon.addEventListener("click", () => {
    volume.classList.remove("d-none");
    setTimeout(() => {
        volume.classList.add("d-none");
    }, 5000);
})


function changeVolume(){
    let voll = rangeBar.value / 100;
    return voll;
}
changeVolume()


// cancel() => to stop;
// pause() => to pause;
// for progress bar => utterThis.rate = rate.value;