// let crash = document.querySelector("#crash")
// let kick = document.querySelector("#kick")
// let snare = document.querySelector("#snare")
// let tom = document.querySelector("#tom")
let div1 = document.createElement("div")
let div2= document.createElement("div")
let div3 = document.createElement("div")
let div4 = document.createElement("div")
let img1 = document.createElement("img")
let img2 = document.createElement("img")
let img3 = document.createElement("img")
let img4 = document.createElement("img")
let container = document.querySelector("#div2")
img1.src = "crash.png"
img2.src = "kick.png"
img3.src ="snare.png"
img4.src ="tom.png"
div1.append(img1)
div2.append(img2)
div3.append(img3)
div4.append(img4)
// div1.classList.add("crash")
// div2.classList.add("kick")
// div3.classList.add("snare")
// div4.classList.add("tom")
container.append(div1,div2,div3,div4)
document.body.addEventListener("keypress",(ev)=> {
    if(ev.key == "s"){
        crash2()
        let p1 = document.createElement('p');
            p1.innerHTML = 'S';
            div1.append(p1)
            setTimeout(() => {
                p1.remove()
            }, 250)
    }
    else if(ev.key == "d"){
        kick2()
        let p1 = document.createElement('p');
            p1.innerHTML = "D";
            div2.append(p1)
            setTimeout(() => {
                p1.remove()
            }, 250)
    }
    else if(ev.key == "f"){
        snare2()
        let p1 = document.createElement('p');
            p1.innerHTML = 'F';
            div3.append(p1)
            setTimeout(() => {
                p1.remove()
            }, 250)
    }
    else if(ev.key == "g"){
        tom2()
        let p1 = document.createElement('p');
        p1.innerHTML = "G";
        div4.append(p1)
        setTimeout(() => {
            p1.remove()
        }, 250)
    }
    else{
        console.log("none")
    }


})
img1.addEventListener("click",crash2)
img2.addEventListener("click",kick2)
img3.addEventListener("click",snare2 )
img4.addEventListener("click",tom2)
function crash2(){
    let crash1 = new Audio()
    crash1.src ="crash.mp3"
    crash1.play()
}
function kick2(){

    let kick1 = new Audio()
    kick1.src ="kick.mp3"
    kick1.play()
}
function snare2(){

    let snare1 = new Audio()
    snare1.src ="snare.mp3"
    snare1.play()
}
function tom2(){

    let tom1 = new Audio()
    tom1.src ="tom.mp3" 
    tom1.play()
}