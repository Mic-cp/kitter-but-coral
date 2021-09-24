
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
