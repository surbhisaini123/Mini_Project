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
//------GAME FLASH-------
function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },150)

}
// --------USER FLASH--------
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },150)

}
function levelUp(){
    level++
    h2.innerHTML=`level ${level}`
    let randIdx=Math.floor(Math.random()*3)
    let randcolor=btns[randIdx]
    let randbtn=document.querySelector(`.${randcolor}`)
    console.log(randIdx)
    console.log(randcolor)
    console.log(randbtn)


    btnflash(randbtn)

}

function btnPress(){
    // console.log("button is pressed")
    console.log(this)
    let btn=this
    userflash(btn)
}

let allBtns=document.querySelectorAll(".btn")
for(let btn of allBtns){
    btn.addEventListener("click",btnPress)
}