var drumButtons = document.querySelectorAll(".drum").length;
for(var i = 0 ; i < drumButtons ; i++ )
{
    
document.querySelectorAll("button")[i].addEventListener("click", function (){
    alert("I got Clicked");
});
}



