let toggles=document.querySelectorAll(".toggle");

console.log(toggles);

toggles.forEach((tog)=>{
    tog.addEventListener("click",()=>{
        tog.parentNode.classList.toggle("active")
    })
})