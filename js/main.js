var nameArray = ["#name1","#name2", "#name3", "#name4"]
var descArray = ["#desc1","#desc2","#desc3","#desc4"]
var opportunitiy = []

opportunitiy[1] = {
    oppName: "Volunteering 1",
    oppCatagory: "General",
    oppGender: "Both",
    oppDesc: "ya",
    oppLocation: "School",
    oppCompany: "City of Brampton",
    oppNumHours: "10"
}

var stringOpp = JSON.stringify(opportunitiy[1]);
localStorage.setItem("opportunities", stringOpp);   
window.onload = function() {
    displayOpportunities();
}

function displayOpportunities() {

var localData = localStorage.getItem("opportunities")
var parsedData = JSON.parse(localData)
var catagorySelector = $("#catagorySelector").val()
var genderSelector = "Both"

for (var i=0; i < 5; i++) { 
    
if (catagorySelector === parsedData.oppCatagory || catagorySelector === "All") {
    $(nameArray[i]).html(parsedData.oppName);
    $(descArray[i]).html(parsedData.oppDesc);
}

else {
    $(nameArray[i]).html("nothing here bro");
    $(descArray[i]).html("nothing here bro");
}

}}