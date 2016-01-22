var index = []
var opportunitiy = []

function createOpp() {
  index++
  opportunitiy[index] = {
    oppName: $("#name").val(),
    oppCatagory: $("#createcatagory").val(),
    oppGender: $("#selectgender").val(),
    oppDesc: $("#desc").val(),
    oppLocation: $("#location").val(),
    oppCompany:$("company").val(),
    oppNumHours: $("#numHours").val()
  }
  var stringOpp = JSON.stringify(opportunitiy[index]);
 localStorage.setItem("opportunities", stringOpp);
}

document.onload = initAutocomplete(), geolocate()
var placeSearch, autocomplete;

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('location')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}