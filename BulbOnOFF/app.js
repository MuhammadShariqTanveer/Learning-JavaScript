function buttonOn(){
    console.log(event)
    if(event.type==="click"){
        var imageElement = document.getElementById("imgs");
        imageElement.src = "images/bulbon.png";
        // imageElement.style.width = "110px";
       
}
}

function buttonOff(){
    console.log(event)
        var imageElement = document.getElementById("imgs");
        imageElement.src = "images/bulbof.png";
        // imageElement.style.width = "110px";
        
       
}
