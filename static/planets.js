var config = {
    apiKey: "To get this running, you need my private key here... sorry :)",
    authDomain: "cloud-app-db.firebaseapp.com",
    databaseURL: "https://cloud-app-db.firebaseio.com",
    projectId: "cloud-app-db",
    storageBucket: "cloud-app-db.appspot.com",
    messagingSenderId: "742436721673"
  };
var db;
$.getScript('https://cdn.firebase.com/v0/firebase.js', function() {
  firebase.initializeApp(config);
  db = firebase.firestore();
    
});

var selected = null;

function submitNewPlanet(planetObj) {
  $("#loadingMsg").html("Loading...");
  db.collection("planets").add(planetObj)
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    $("#loadingMsg").html("Planet successfully submitted! Nice!");
  })
    .catch(function(error) {
    console.error("Error adding document: ", error);
    $("#loadingMsg").html("There was a problem?? Error:" + error.message);
  });
}

function submitPlanet() {
  planetColor = $("#planetColor").val();
  landColor = $("#landColor").val();
  cloudColor = $("#cloudColor").val();  
  continentNum = $("#continentNum").val();
  cloudNum = $("#cloudNum").val();
  name = $("#name").val();
  
  var planetObj = {
    name,
    planetColor,
    cloudColor,
    landColor,
    continentNum,
    cloudNum
  }
  submitNewPlanet(planetObj);
}

function deletePlanet(id) {
  db.collection('planets').doc(id).delete()
  .then(() => {
    console.log("Planet deleted!");
    loadPlanets();
  }).catch((error) => {
    console.error("Frick! We had a problem deleting that planet: ", error);
  })
}

function loadPlanets() {
  var planetList = $('#planetList');
  planetList.html("Loading planets...");
  
  var list = [];
  
  db.collection('planets').get()
  .then((querySnapshot) => {
    planetList.html("");
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      list.push(doc.data());
      var data = doc.data();
      var newPlanStr = '<button onclick="makePlanetParams(\'';
      newPlanStr += data.name;
      newPlanStr += "', '" + data.cloudColor;
      newPlanStr += "', '" + data.planetColor;
      newPlanStr += "', '" + data.landColor;
      newPlanStr += "', " + data.continentNum;
      newPlanStr += ", " + data.cloudNum;
      newPlanStr += ", '" + doc.id;
      newPlanStr += "')\">" + data.name;
      newPlanStr += "</button><button onclick=\"deletePlanet('" + doc.id + "')\">Delete</button><br>";
      
      planetList.append(newPlanStr);
    });
    console.log(list);
  }).catch((error) => {
    
  })
}

function updatePlanet() {
  if (selected == null) {
    alert("Select a planet first please! :)");
    return;
  }
  $("#loadingMsg").html("Loading...");
  
  planetColor = $("#planetColor").val();
  landColor = $("#landColor").val();
  cloudColor = $("#cloudColor").val();  
  continentNum = $("#continentNum").val();
  cloudNum = $("#cloudNum").val();
  name = $("#name").val();
  
  var planetObj = {
    name,
    planetColor,
    cloudColor,
    landColor,
    continentNum,
    cloudNum
  }
  db.collection('planets').doc(selected).update(planetObj)
  .then(() => {
    loadPlanets();
    makePlanetParams(name, cloudColor, planetColor, landColor, continentNum, cloudNum, selected);
    $("#loadingMsg").html("planet updated!");
  }).catch((error) => {
    console.error("Error!", error.message);
  })
}

var cloudColor = "#FFFFFF";
var planetColor = "#5A2744";
var landColor = "#7A4764";

var continentNum = 40;
var cloudNum = 40;

function makePlanetParams(name, cColor, pColor, lColor, contNum, cloudNum, id) {
  selected = id;
  console.log("Selected: ", selected);
  $("#planet").css("background", pColor);
  $("#clouds").html("");
  $("#planetName").html("Planet name: " + name);

  for (var i = 0; i < cloudNum; ++i) {
    $("#clouds").append("<div class='cloud' id='cloud" + i + "'></div>");
    
    $("#cloud" + i).css("background", cColor);
    
    $("#cloud" + i).css("width", Math.floor((Math.random() * 12) + 3) + 'vw');
    $("#cloud" + i).css("top", Math.floor((Math.random() * 30)) + 'vw');
    $("#cloud" + i).css("animation-delay", Math.floor((Math.random() * -30)) + 's');
  }
  
  $("#land").html("");
  
  for (var i = 0; i < contNum; ++i) {
    $("#land").append("<div class='continent' id='continent" + i + "'></div>");
    
    $("#continent" + i).css("background", lColor);
    $("#continent" + i).css("width", Math.floor((Math.random() * 12) + 3) + 'vw');
    $("#continent" + i).css("top", Math.floor((Math.random() * 30)) + 'vw');
    $("#continent" + i).css("animation-delay", (Math.floor((Math.random() * -200))/10) + 's');
  }
}

function makePlanet() {
  planetColor = $("#planetColor").val();
  landColor = $("#landColor").val();
  
  cloudColor = $("#cloudColor").val();
  
    $("#planet").css("background", planetColor);
  
  continentNum = $("#continentNum").val();
  cloudNum = $("#cloudNum").val();
  
  generateClouds(cloudNum);
  generateLand(continentNum);
}

function randomize() {
  $("#planetColor").val(randHex());
  $("#cloudColor").val(randHex());
  $("#landColor").val(randHex());
  
  $("#continentNum").val(Math.floor(Math.random() * 50) + 10);
  $("#cloudNum").val(Math.floor(Math.random() * 50) + 10);
  
  makePlanet();
}

function randHex() {
  var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  
  return randomColor;
}

function generateClouds(cloudAmt) {
  $("#clouds").html("");
  for (var i = 0; i < cloudAmt; ++i) {
    $("#clouds").append("<div class='cloud' id='cloud" + i + "'></div>");
    
    $("#cloud" + i).css("background", cloudColor);
    
    $("#cloud" + i).css("width", Math.floor((Math.random() * 12) + 3) + 'vw');
    $("#cloud" + i).css("top", Math.floor((Math.random() * 30)) + 'vw');
    $("#cloud" + i).css("animation-delay", Math.floor((Math.random() * -30)) + 's');
    
    
  }
};

function generateLand(landAmt) {
  $("#land").html("");
  
  for (var i = 0; i < landAmt; ++i) {
    $("#land").append("<div class='continent' id='continent" + i + "'></div>");
    
    $("#continent" + i).css("background", landColor);
    $("#continent" + i).css("width", Math.floor((Math.random() * 12) + 3) + 'vw');
    $("#continent" + i).css("top", Math.floor((Math.random() * 30)) + 'vw');
    $("#continent" + i).css("animation-delay", (Math.floor((Math.random() * -200))/10) + 's');
  }
};
