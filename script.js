var x = document.getElementById("demo");
document.getElementById("map1").src=`https://maps.google.com/maps?q=${localStorage.getItem('lat')},${localStorage.getItem('long')}&z=15&output=embed`


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    localStorage.setItem('lat', position.coords.latitude);
  localStorage.setItem('long', position.coords.longitude);
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;

  document.getElementById("map1").src=`https://maps.google.com/maps?q=${localStorage.getItem('lat')},${localStorage.getItem('long')}&z=15&output=embed`

  
 // console.log(map)
}


function removeItem(){
    localStorage.removeItem('lat');
    localStorage.removeItem('long');
}


