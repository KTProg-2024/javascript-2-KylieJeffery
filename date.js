function getDate() 
{
	var dateString = new Date();
	document.getElementById("date").innerHTML=dateString;
}
function blue()
{
	document.getElementById("date").style.color="blue";
  document.getElementById("date").style.font = "italic bold 20px arial,serif";
}
function red()
{
	document.getElementById("date").style.color="red";
  document.getElementById("date").style.font = "italic bold 20px arial,serif";
}
function update() {
 var d = new Date();
  document.getElementById("date").innerHTML = d;
}