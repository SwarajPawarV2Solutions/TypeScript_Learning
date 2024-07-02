var email = prompt("Enter Mail Id");
if (email != null) {
    var atposition = email.indexOf('@');
    var dotposition = email.indexOf('.');
    if (atposition == -1 || dotposition == -1) {
        alert("Invalid Mail Id");
    }
    else {
        alert("Valid Maild Id");
    }
}
