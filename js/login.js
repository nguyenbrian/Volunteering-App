// Brian Nguyen - ICS3UO-A

$( "#userpass" ).submit(function() {
  event.preventDefault();
});

$( "#registerform" ).submit(function() {
  event.preventDefault();
});
// Disables forms from refreshing the page when the user presses Enter

function submitUserpass() {
// Function that handles logging in
    var parsedLoginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
// Sets up variables to be compared aganist during login
    if (username == parsedLoginInfo.fullname && password == parsedLoginInfo.password) {
// Compares the registered account from localStorage to the login information the user provided in the text boxes
// If the input matches, run the curly brackets
        var userPass = "You are about to sign in as " + "<strong>" +  username + "</strong>" + "." + "</br> </br>" + "Ready to sign-in?";
// Creates the string to be displayed on the website asking for the user to confirm login
        $("#hiddentext").html(userPass);
// Changes the inner html of #hiddentext to the string value stored inside userPass
        $("#submitbutton").attr("value","Ready!");
// Changes button text
        $("#hiddentext").removeAttr("hidden");
        $("#hiddentext").addClass("animated FadeIn");
        $("#title").attr("class", "animated fadeOut");
        $("#loginbox").attr("class", "animated fadeOut");
// Applies transition animations
        $("#submitbutton").click("submit", function() {
            document.location.href = "html/home.html";
// When the user presses on the button, change the webpage to home.html
        })
    }
    else {
          if ( $("#title").text() != "Your username or password is incorrect." ) {
            $("#title").fadeOut(function() {
                $(this).text("Your username or password is incorrect.");
            }).fadeIn();
            }
// If the input did not match the localStorage, let the user know that their username or password may be incorrect
    $("#submitbutton").attr("class", "animated shake");
    setTimeout(function() {
        $("#submitbutton").attr("class", "")
    }, 1500);
// Applies transition animations
}}

function displayregister() {
// Function that triggers when a button is pressed to transition the page from the "login" state to the "register" state
    $("#registertrigger").attr("class", "animated bounceOutDown");
    $("#registerwrapper").attr("class", "animated fadeIn");
    $("#registerwrapper").removeAttr("hidden");
    $("#registerwrapper").show();
    $("#title").html("Register");
    $("#registerwrapper").addClass("animated FadeIn");
    $("#registerwrapper").animate( {
            'height': 295
    }, 750)
    $("entireloginwrapper").css("height", "");
    $("#loginbox").attr("class", "animated fadeOut");
    $('#loginbox').one('webkitAnimationEnd', $("#loginbox").hide());
    $("#submitbutton").attr("value","register");
    $("#submitbutton").attr("onclick","register()");
    $("#submitbutton").attr("form","registerform");
    $("#submitbutton").css("margin-top","30px");
}

function register() {
// Function that handles creating an account
    var loginInfo = {
        fullname: $("#name").val(),
        username: $("#usernamereg").val(),
        email: $("#email").val(),
        password: $("#regpassword").val(),
        gender: $("#gender").val()
// Creates a object named "loginInfo" and stores data from the register form into it
    };
    localStorage.loginInfo = JSON.stringify(loginInfo);
// Takes JSON data from the object "loginInfo", converts it into a string, and stores it in a localStorage variable named "loginInfo"
    $("#loginbox").attr("class", "animated fadeIn");
    $("#registerwrapper").animate({
        'height': 0,
        'opacity': 0
        }, 750, function() {
            $("#registerwrapper").hide()
            }
        );
    setTimeout(function() {
        $('#registerwrapper').one('webkitAnimationEnd', $("#loginbox").show())
        $("#username").focus();
    }, 150);
    setTimeout(function() {
        $("#submitbutton").animate({
            'margin-top': 160
        })
    }, 300)
    $("#submitbutton").attr("value","continue");
    $("#submitbutton").attr("onclick","submitUserpass()");
    $("#submitbutton").attr("form","userpass");
    $("#registertrigger").attr("class", "animated bounceInUp");
    $("#title").html("Account creation successful!");
    setTimeout(function() {
        $("#title").attr("class", "animated bounceOutLeft");
    }, 1800);
    setTimeout(function () { 
        $("#title").attr("class", "animated bounceInRight");
        $("#title").html("Sign In");
        $("#title").attr("class", "animated fadeInUp");
    }, 2400);
// Returns page back to the "login" state using animations

}