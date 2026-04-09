
const btns = document.querySelectorAll(".question-btn");
const answers = document.querySelectorAll(".answer");
const btnsImages  = document.querySelectorAll(".question-btn img");

btns.forEach(btn=>{
btn.addEventListener("click",()=>{
   const idName = btn.getAttribute("aria-controls");
   const elemntToShow = document.getElementById(idName);
  const activeBtnImg = document.querySelector(`button[aria-controls="${idName}"] img`);
answers.forEach(answer=>{
if(answer.id !==idName){
 answer.classList.remove("display")  
}

})
btnsImages.forEach(img=>{
   img.src="assets/images/icon-plus.svg"
})
btns.forEach(btn=>{
   btn.setAttribute("aria-expanded","false")
})

elemntToShow.classList.toggle("display") 
if(elemntToShow.classList.contains("display")){
 btn.setAttribute("aria-expanded",true)
activeBtnImg.src="assets/images/icon-minus.svg"
}else{
btn.setAttribute("aria-expanded",false)
   activeBtnImg.src="assets/images/icon-plus.svg"

}

})

})

