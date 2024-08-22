let h2 = document.querySelector("h2");
let GameSeq = [];
let userSeq = [];
let sel_color = ["green", "yellow" , "red" , "purple"];
let started = false;

let level = 0;
document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("Game Started");
        started = true;
        levelup();
    }
});

function gameFlash(btn){
      btn.classList.add("flash");
      setTimeout(function(){
        btn.classList.remove("flash");
      },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
      btn.classList.remove("userFlash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
   h2.innerText  = `Level ${level}`;
  
   RandIdx = Math.floor(Math.random()*3);
   RandClr = sel_color[RandIdx];
   RandBtn = document.querySelector(`.${RandClr}`);
   GameSeq.push(RandClr);
   console.log(GameSeq);
   gameFlash(RandBtn);
}

function checkAns(index){

    if(GameSeq[index] === userSeq[index]){
        if(GameSeq.length == userSeq.length){
               setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b>  <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);

        reSet();
    }
}
function btnPress (){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    let userClr = btn.getAttribute("id");
    // console.log(userClr);
    userSeq.push(userClr);
   
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click" , btnPress);
}

function reSet(){
    started = false;
    level=0;
    userSeq = [];
    GameSeq = [];
}