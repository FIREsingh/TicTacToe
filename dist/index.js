let boxes = document.querySelectorAll(".myBox");
let btn = document.getElementById("btn");
let isX = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(isX){
            box.innerText = "O";
            isX = false;
        }else{
            box.innerText = "X";
            isX = true;
        }
        box.disabled = true;
        
        checkWin();
    })
 })
 function dis(){
    for(let box of boxes){
        box.disabled = true;
    }
 }
 let enable =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    let div = document.getElementById("main");
    div.innerText = ``;
 }
 function checkWin(){
    for(pattern of winningPattern){
        let v1 = boxes[pattern[0]].innerText;
        let v2 = boxes[pattern[1]].innerText;
        let v3 = boxes[pattern[2]].innerText;

        if(v1 != "" && v2 !="" && v3 != ""){
            if(v1 === v2 && v2 === v3){
                let div = document.getElementById("main");
                div.innerText = `Winner is :  ${v1}`;
                dis();
            }
        }
    }
 }
 
 btn.addEventListener("click", enable);