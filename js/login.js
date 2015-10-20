function submitUserpass() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userPass = "Your user name is " + username + " and your password is " + password + "." + "\n\nProceed to sign-in?";
    $("#hiddentext").text(userPass)
    $("#hiddentext").removeAttr("hidden")
    $("#hiddentext").addClass("animated FadeIn")
    $("#title").attr("class", "animated fadeOut");
    $("#loginbox").attr("class", "animated fadeOut");
    
    
}