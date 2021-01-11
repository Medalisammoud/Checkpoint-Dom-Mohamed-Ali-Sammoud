let cols=Array.from(document.querySelectorAll(".fa-heart"));
let delts=Array.from(document.querySelectorAll(".fa-trash-alt"));
let sect=Array.from(document.querySelectorAll(".section"));
let bttplus=Array.from(document.querySelectorAll(".bttplus"));
let bttmoins=Array.from(document.querySelectorAll(".bttmoin"));
let qtts=Array.from(document.querySelectorAll(".qtt"));
let tot=document.querySelector(".total");



// function for change color 
for(let col of cols){
    col.addEventListener("click",function(){
        col.style.color==="red" ? col.style.color="black" : col.style.color="red";
    })
}

// function delete a element
for(let i in delts){
    delts[i].addEventListener("click", function(){
    sect[i].remove();  
    total();  
    })
}


// fuction increment 
for(let i in bttplus){
    bttplus[i].addEventListener("click", function(){
     qtts[i].innerHTML++;   
     total();  
    })
}

// fuction decrement 
for(let i in bttmoins){
    bttmoins[i].addEventListener("click", function(){
     qtts[i].innerHTML > 0 ? qtts[i].innerHTML-- :null ; 
     total();  
    })
}
 // fuction prix total
function total(){
    let prixtts=Array.from(document.querySelectorAll(".prixtt"));
    let qs=Array.from(document.querySelectorAll(".qtt"));
    let sum=0;
    for(let i in prixtts){
        sum=sum + Number(prixtts[i].innerHTML)*Number(qs[i].innerHTML);
    }
    tot.innerHTML=sum;
    return(tot.innerHTML);
}