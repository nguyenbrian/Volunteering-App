function submitUserpass() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userPass = "Your user name is " + username + " and your password is " + password + "." + "\n\nProceed to sign-in?";
    var proceed = confirm(userPass);
    if (proceed == true) {
    document.location.href = "html/home.html";
    }
    
    else {
    }
};