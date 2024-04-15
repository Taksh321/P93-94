
var firebaseConfig = {
      apiKey: "AIzaSyA881GKxALr-dj6whax9wUIUsxwZpHUes4",
      authDomain: "kwitter31stmarch.firebaseapp.com",
      databaseURL: "https://kwitter31stmarch-default-rtdb.firebaseio.com",
      projectId: "kwitter31stmarch",
      storageBucket: "kwitter31stmarch.appspot.com",
      messagingSenderId: "891037773446",
      appId: "1:891037773446:web:506bb9dab190846f1f6b07"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
