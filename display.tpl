<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="/static/planets.js" charset="utf-8"></script>
  <script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script> 
  <script src="https://www.gstatic.com/firebasejs/4.11.0/firebase-firestore.js"></script>

  
  <link rel="stylesheet" href="static/style.css">
  
  <style>
    #planetContainer {
      position: fixed;
      right: 0px;
      bottom: 0px;
      width: 30vw;
      height: 33vw;
      padding: 1vw;
      border: solid 2px white;
      box-shadow: 0px 0px 10px white;
      animation: glow 1s linear infinite;
    }
    
    @keyframes glow {
      0% {
        box-shadow: 0px 0px 10px white;
      }
      50% {
        box-shadow: 0px 0px 20px white;
      }
      100% {
        box-shadow: 0px 0px 10px white;
      }
    }
  
  </style>
  </head>
<body onload="loadPlanets()" style="display: block;">
  
  <div id="planetList">
  
  </div>
  
  
  <div id="planetContainer">
    <div id="planetName"></div>
    <div id="planet">
      <div id="land"></div>
      <div id="clouds"></div>
      <div id="shadow"></div>
    </div>
    
    <div id="dispControls">
      Planet Editor:
  <div class="optRow">
  <div class="opt">
    Planet Color:<br>
    <input type="color" id="planetColor" value="#5A2744">
  </div>
  <div class="opt">
    Land Color:<br>
    <input type="color" id="landColor" value="#7A4764">
  </div>
  <div class="opt">
    Cloud Color:<br>
    <input type="color" id="cloudColor" value="#FFFFFF">
  </div>
  </div>
  
  <div class="optRow">
    <div class="opt">
      
      Continents:<br>
      <input type="number" class="num" id="continentNum" value="40" min="0" max="100">
    </div>
    <div class="opt">
      
      Clouds:<br>
      <input type="number" class="num" id="cloudNum" value="40" min="0" max="100">
    </div>
    <!--<div class="opt">
      Shadow:
      <input type="checkbox"  id="shadowTog">
      
    </div>-->
    
  </div>
  <input type="text" id="name" placeholder="Planet Name" style="padding: 10px;text-align: center;">
  <div id="submit" class="optRow">
    <button onclick="updatePlanet()">Update Selected Planet To These Settings</button>
    <br>
  </div>
      <br>
  <a href="/" style="color:white;">to New Planet Panel</a>
  <div id="loadingMsg"></div>
</div>
  </div>
  
  
  
  
</body>

</html>