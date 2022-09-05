
let after=document.querySelector(".header .after")

setInterval(()=>{

    let persentage=(scrollY/916)*100

    after.style.width=`${persentage}%`

},0)


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

