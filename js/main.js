let dropMenu=document.querySelector(".drop-menu")
let bell=document.querySelector(".bell")
bell.onclick=()=>{
    dropMenu.classList.toggle("show")
}


// create bars overlay
let bars=document.querySelector(".bars")


bars.onclick=createOverlay


function createOverlay() {
    let overlay=document.createElement("div")
    overlay.classList.add("overlay")
    
    let bgImg=document.createElement("img")
    bgImg.src="images/img/menu.png"
    overlay.appendChild(bgImg)

    let x=document.createElement("div")
    x.innerHTML="X"
    x.id="close"
    overlay.appendChild(x)
    
    
    let links=document.createElement("ul")
    links.classList.add("links")

    let nameLinks=["home" , "trending" ,"newGames" , "actionGames", "contactUs"]
    for (let i = 0; i < 5; i++) {
        let a =document.createElement("a")
        a.innerHTML=nameLinks[i]
        a.setAttribute("href" , `#${nameLinks[i]}`)
        links.appendChild(a)
    }
    overlay.appendChild(links)
    document.body.appendChild(overlay)


    
    
    // remve overlay
    let closed=document.getElementById("close")
    closed.addEventListener( "click", ()=>{
        overlay.remove()
    })

    let arr=Array.from(document.querySelectorAll(".overlay .links a"))
    arr.forEach(e=>{
        e.addEventListener("click" , ()=>{
            overlay.remove()
        })
    })
    
}


//        move boxs by right and left arrow

// left: calc(-238px - 238px);
// left: -984px;  max

let boxs=document.querySelector(".boxs")
let rightBtn=document.querySelector(".r-btn")
let leftBtn=document.querySelector(".l-btn")

rightBtn.onclick=function(){

    boxs.style.transform+=`translateX(-247.5px)`

}
leftBtn.onclick=function(){
    
    boxs.style.transform+=`translateX(238px)`

}


// header span 
// max 1517

let after=document.querySelector(".header .after")

setInterval(()=>{

    let persentage=(scrollY/1517)*100

    after.style.width=`${persentage}%`

},0)


let supwayBox=document.querySelector(".supway")

supwayBox.onclick=function(){
    window.open("description.html")
}


