function username() 
{
name=document.getElementById("name").value;
localStorage.setItem("name_input",name)
window.location="kwitter_room.html"
}