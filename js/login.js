$( "#userpass" ).submit(function() {
  event.preventDefault();
});

function submitUserpass() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "nguyenbrian" && password == "omarsucks") {
    var userPass = "Your user name is " + "<strong>" +  username + "</strong>" + " and your password is " + "<strong>" + password + "</strong>" + "." + "</br> </br>" + "Proceed to sign-in?";
    $("#hiddentext").html(userPass);
    $("#hiddentext").removeAttr("hidden");
    $("#submitbutton").attr("value","confirm");
    $("#hiddentext").addClass("animated FadeIn");
    $("#title").attr("class", "animated fadeOut");
    $("#loginbox").attr("class", "animated fadeOut");
    $("#submitbutton").click("submit", function() {
    document.location.href = "html/home.html";
    })}
    
    else {
      if ( $("#title").text() != "Your username or password is incorrect." ) {
      $("#title").fadeOut(function() {
      $(this).text("Your username or password is incorrect.")
      }).fadeIn();
      }
      
     $("#submitbutton").attr("class", "animated shake");
     setTimeout(function() {
       $("#submitbutton").attr("class", "")}, 1500);
  
}}