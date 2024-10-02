
// js tab


// function toogle button & display none start here
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
// function toogle button & display none end here

// defult open
document.getElementById("defult_open").click();

// close item function

function closeItem(){
  let span = document.querySelectorAll("span");
  spanArr = Array.from(span);
  spanArr.map((closed) =>{
    closed.parentElement.style.display = "none";
  })
}

// closed function end here


