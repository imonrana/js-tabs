
// js tab


function openCity(evt, cityName){
    let content = document.querySelectorAll(".tab_content");
let contentArr = Array.from(content);
contentArr.map((item) =>{
   item.style.display = "none";
})

let btn = document.querySelectorAll(".btn");
btnArr = Array.from(btn);
btnArr.map((btnItem) =>{
    btnItem.className = btnItem.className.replace(" active", "");
    
})
document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

