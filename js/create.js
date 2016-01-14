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