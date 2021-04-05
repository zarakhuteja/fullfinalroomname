var firebaseConfig = {
  apiKey: "AIzaSyD0k1LTs8GdEY9Y_raNkQGOxPMSypM7m-c",
  authDomain: "kwitter-e6ef4.firebaseapp.com",
  databaseURL: "https://kwitter-e6ef4-default-rtdb.firebaseio.com",
  projectId: "kwitter-e6ef4",
  storageBucket: "kwitter-e6ef4.appspot.com",
  messagingSenderId: "1078690994379",
  appId: "1:1078690994379:web:46c960be60bc10f2d7234e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  
    user_name = localStorage.getItem("user_name");
    window.alert(user_name);
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "https://zarakhuteja.github.io/k2final/index.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "https://zarakhuteja.github.io/k2final/index.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "https://zarakhuteja.github.io/kfinal/";
  }
  