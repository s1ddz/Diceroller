const roll=()=>{
var a=Math.floor((Math.random()*6)+1);
var url1="/images/dice"+a+".png";


var b=Math.floor((Math.random()*6)+1);
var url2="/images/dice"+b+".png";

document.querySelectorAll("img")[0].setAttribute("src", url1);
document.querySelectorAll("img")[1].setAttribute("src", url2);
    

    if (a>b){
        document.querySelectorAll("h1")[0].innerHTML="<h1>Player 1 Wins</h1>";
    }
    else if(b>a){
        document.querySelectorAll("h1")[0].innerHTML="<h1>Player 2 Wins</h1>"
    }
    else{
        document.querySelectorAll("h1")[0].innerHTML="<h1>Its a Draw</h1>"
    }

}
roll();
