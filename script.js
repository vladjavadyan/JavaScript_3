var name = prompt("Whats your name?");
var surname = prompt("Whats your surname?");
alert("Hello " + name + " " + surname + " fill in the blanks.");


function result(){
var mek = String(document.getElementById("a1").value);
var erku = String(document.getElementById("a2").value);
var ereq = String(document.getElementById("a3").value);
var chors = String(document.getElementById("a4").value);
var hing = Number(document.getElementById("a5").value);
var sum = 0;


if(mek == "Yerevan"){
    sum = sum+2;
    document.getElementById("a1").style.backgroundColor = 'green';
}else{
    document.getElementById("a1").style.backgroundColor = 'red';
}
if(erku == "Washington"){
    sum = sum+2;
    document.getElementById("a2").style.backgroundColor = 'green';
}else{
    document.getElementById("a2").style.backgroundColor = 'red';
}
if(ereq == "Steve Jobs"){
    sum = sum+2;
    document.getElementById("a3").style.backgroundColor = 'green';
}else{
    document.getElementById("a3").style.backgroundColor = 'red';
}
if(chors == "Mark Zuckerberg"){
    sum = sum+2;
    document.getElementById("a4").style.backgroundColor = 'green';
}else{
    document.getElementById("a4").style.backgroundColor = 'red';
}
if(hing == 50){
    sum = sum+2;
    document.getElementById("a5").style.backgroundColor = 'green';
}else{
    document.getElementById("a5").style.backgroundColor = 'red';
}
document.getElementById("patasxan").innerHTML ="You have colleqted " +sum+ " points";

if(sum == 10){
    alert("Dear " +name+ " You win " + " you have "+sum+" points")
}else{
    alert("Dear " +name+" Try again" + " you have "+sum+" points")
}

}