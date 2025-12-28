
console.log("js connected succesfully");
document.getElementById("heading").innerText="change"
document.getElementById("heading").innerHTML="<h1>Hello DOM</h1>";
document.getElementById("heading").style.color="red"
document.getElementById("btn").addEventListener("click", function () {
   document.getElementById("para").style.color="red";
});



console.log(" ")