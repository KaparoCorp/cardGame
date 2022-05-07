const cards =["card1.png","card2.png","card3.png"];


let cardImage=document.querySelectorAll(".cardsImg");

cardImage.forEach( (e)=>{
    let randomNum=Math.floor(Math.random()*2.5);
    let clickedSrc;
    e.src=`./cards/${cards[randomNum]}`;
    e.addEventListener("click", (clicked)=>{
        console.log(clicked)
    })
})

// how to get the id of the  clicked btn