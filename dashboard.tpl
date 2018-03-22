<html>
<head>
  <script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script>
  <script src="https://www.gstatic.com/firebasejs/4.11.0/firebase-firestore.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="/static/planets.js" charset="utf-8"></script>
  
  <link rel="stylesheet" href="static/style.css">
  </head>
  
  <body onload="randomize()">
<div id="planet">
  <div id="land"></div>
  <div id="clouds"></div>
  <div id="shadow"></div>
  
</div>

<div id="moon"></div>

<div id="controls">
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
    <button onclick="makePlanet()">Update Planet Preview</button>
    <button onclick="randomize()">Randomize Planet</button>
    
  </div>
  <button onclick="submitPlanet()">Submit planet to db!</button>
  <a href="/display" style="color:white;">Click to See All Planets -></a>
  <div id="loadingMsg"></div>
</div>
    
    </body>

</html>

