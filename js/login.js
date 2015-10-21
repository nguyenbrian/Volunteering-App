$( "#userpass" ).submit(function() {
  event.preventDefault();
});

function submitUserpass() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userPass = "Your user name is " + "<strong>" +  username + "</strong>" + " and your password is " + "<strong>" + password + "</strong>" + "." + "</br> </br>" + "Proceed to sign-in?";
    $("#hiddentext").html(userPass);
    $("#hiddentext").removeAttr("hidden");
    $("#submitbutton").attr("value","confirm");
    $("#hiddentext").addClass("animated FadeIn");
    $("#title").attr("class", "animated fadeOut");
    $("#loginbox").attr("class", "animated fadeOut");
    $("#submitbutton").click("submit", function() {
    document.location.href = "html/home.html";
    } )
    

    }