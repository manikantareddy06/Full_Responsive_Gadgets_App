var header =document.querySelector("u")
header.style.color='blue'
function getRandomColor()
{
    var letters ="0123456789ABCDEF";
    var color="#";
    for(var i=0;i<6;i++)
    {
        color +=letters[Math.floor(Math.random()*16)];
    }
    return color
}
function changeHeaderColor()
{
    colorInput =getRandomColor()
    header.style.color = colorInput;
}
setInterval("changeHeaderColor()",1000);
document.getElementById("d1").onmouseenter = function() {me1()};
document.getElementById("d1").onmouseleave = function() {ml1()};
function me1()
{
    document.getElementById("d1").style.color="blue";
}
function ml1()
{
    document.getElementById("d1").style.color="black";
}
