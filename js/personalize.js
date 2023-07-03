const categoryBox = document.querySelector(".cat-box");
const category = document.querySelectorAll(".categroy");
const submit = document.querySelector(".submit");
const p1 = document.querySelector(".page-1");
const p2 = document.querySelector(".page-2");
const p3 = document.querySelector(".page-3");
const personalize = document.querySelector(".personalize");

personalize.addEventListener("click", () => {
    p1.style.transform = "translateY(-100%)";
    p2.style.transform = "translateY(-100%)";
})
submit.addEventListener("click", () => {
    if(submit.classList.contains("active")){
        p2.style.transform = "translateY(-200%)";
        p3.style.transform = "translateY(-200%)";
    }
})




let count = 0;

category.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("active");
        if(e.classList.contains("active")){
            count++;
        }else{
            count--;
        }
        if(count > 0){
            submit.classList.add("active");
        }else{
            submit.classList.remove("active");
        }
    })
})

