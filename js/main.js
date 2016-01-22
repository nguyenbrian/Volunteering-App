var nameArray = ["#name1","#name2", "#name3", "#name4"]
var descArray = ["#desc1","#desc2","#desc3","#desc4"]
  
window.onload = function() {
    displayOpportunities();
}

function displayOpportunities() {

var localData = localStorage.getItem("opportunities")
var parsedData = JSON.parse(localData)
var parsedLoginInfo = JSON.parse(localStorage.getItem("loginInfo"));
var catagorySelector = $("#catagorySelector").val()
var genderSelector = parsedLoginInfo.gender

for (var i=0; i < 5; i++) { 
    
if (parsedData.oppCatagory === catagorySelector || catagorySelector === "All") {
    // if (parsedData[i].gender == genderSelector || parsedData[i].gender == "Both") {
    $(nameArray[i]).html(parsedData.oppName);
    $(descArray[i]).html(parsedData.oppDesc);
}

else {
    $(nameArray[i]).html("Nothing found!");
    $(descArray[i]).html("");
}

}}