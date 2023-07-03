
const skipBtn = document.querySelector(".skip")
const nextBtn  = document.querySelector(".nextBtn")
const finalBtn = document.querySelector(".getstart")
const welcome = document.querySelector(".loading")

let count = 0;

setTimeout(() => {
    welcome.classList.add("d-none");
}, 3000);

nextBtn.addEventListener('click', () => {
    count++;
    if(count === 2){
        skipBtn.classList.toggle("d-none")
        nextBtn.classList.toggle("d-none")
        finalBtn.classList.toggle("d-none")
    }
    console.log(count);
})


