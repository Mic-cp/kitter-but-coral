room_name=localStorage.getItem("room_name")
username=localStorage.getItem("name_input")  
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("room_name")
      localStorage.removeItem("name_input")
      window.location="index.html"
}

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });

      document.getElementById("msg").value=";"
}