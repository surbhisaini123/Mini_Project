let gameseq=[]
let userseq=[]
let btns=["red","yellow","green","blue"]
let started=false
let level=0
let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started")
        started=true
    }
    levelUp()
})
//<<<<------GAME FLASH------->>>>>>>>>>>.

function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },150)

}
// <<<<<<<<<<<<--------USER FLASH-------->>>>>>>>>

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },200)

}
//<<<<<<<<<<<<<<<<-------RANDOM COLOR GENERATED------------>>>>>>>>
// <<<<<<<<<<-----AND PUSH GAME SEQ--------->>>>>>>>>

function levelUp(){
    userseq=[]
    level++
    h2.innerHTML=`level ${level}`
    let randIdx=Math.floor(Math.random()*3)
    let randcolor=btns[randIdx]
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randIdx)
    // console.log(randcolor)
    // console.log(randbtn)

    gameseq.push(randcolor)
    console.log(gameseq)
    btnflash(randbtn)

}
function checkAns(idx){
    // console.log("current level:",level)
    
    if(userseq[idx]===gameseq[idx]){               //check middle element
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        h2.innerHTML=`game over! Your score was  <b>${level}</b> </br> press any key to start `
       document.querySelector("body").style.backgroundColor="red"
       setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white"
       },150)
        restart()
    }    


}
// <<<<<<<<--------WHICH BUTTON USER PRESS--------->>>>>>>>
// <<<<<<<<----------AND PUSH INTO USERSEQ------->>>>>>>>

function btnPress(){
    
    // console.log("button is pressed")
    console.log(this)
    let btn=this
    userflash(btn)
    let userolor=btn.getAttribute("id")
    // console.log(userolor)
    userseq.push(userolor)
    checkAns(userseq.length-1)
}

// <<<<<<<------THIS FUNCTION WORKS ON BUTTON TO CLICK THE BUTTON---->>
let allBtns=document.querySelectorAll(".btn")
for(let btn of allBtns){
    btn.addEventListener("click",btnPress)
}

//<<<<<<<<<<------RESTART------->>>>>>>>>>

function restart(){
    userseq=[]
    gameseq=[]
    started=false
    level=0
}

