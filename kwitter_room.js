
var username
const firebaseConfig = {
      apiKey: "AIzaSyA3MubZYD0Tzpkyv0XXmzhO6lT7Et_YxkI",
      authDomain: "quit-e5b7f.firebaseapp.com",
      databaseURL: "https://quit-e5b7f-default-rtdb.firebaseio.com",
      projectId: "quit-e5b7f",
      storageBucket: "quit-e5b7f.appspot.com",
      messagingSenderId: "376434010540",
      appId: "1:376434010540:web:0a9e8ec41d0382cd73f209"
    };
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("name_input")
    document.getElementById("username+").innerHTML = "welcome "+username ;
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addroom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose:"adding_room"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html"
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}
function logout()
{
      localStorage.removeItem("room_name")
      localStorage.removeItem("name_input")
      window.location="index.html"
}