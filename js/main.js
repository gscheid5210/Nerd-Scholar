function f1() {
    alert("f1 called");
    //form validation that recalls the page showing with supplied inputs.
}
window.onload = function() {
    document.getElementById("register-account").onclick = function fun() {
        createAccount();
        //validation code to see State field is mandatory.
    }
}




function createAccount(e) {
    // if (e.preventDefault) e.preventDefault();
    var firstname = document.getElementById("exampleFirstName").value;
    var lastname = document.getElementById("exampleLastName").value;
    var email = document.getElementById("exampleInputEmail").value;
    var password = document.getElementById("exampleInputPassword").value;
    var confirmpw = document.getElementById("exampleRepeatPassword").value;
    alert(firstname, lastname, email, password, confirmpw);

    //Create User with Email and Password
    firebase.auth().createUserWithEmailAndPassword(mail, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });

    // You must return false to prevent the default form behavior
    return false;
}
//
// var form = document.getElementById('register-account');
// if (form.attachEvent) {
//     form.attachEvent("submit", createAccount);
// } else {
//     form.addEventListener("submit", createAccount);
// }
//
// var email="someone@example.com";
// var password="password";
//
