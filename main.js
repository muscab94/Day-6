const bar = document.querySelector("#re")
const xmark = document.querySelector("#xmark")
const ul = document.querySelector("#ul")

// console.log(bar,xmark,ul)

bar.addEventListener("click", ()=>{
    xmark.style.display = "block"
    ul.style.display = "block"
    bar.style.display = "none"
})
xmark.addEventListener("click", () =>{
    ul.style.display = "none"
    xmark.style.marginLeft = "10px"
    xmark.style.display = "none"
    bar.style.display = "block"
})