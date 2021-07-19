import { Customer } from '../Scripts/customer.js';

function getFullName() {
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    //var email = document.getElementById("email").value;
    //var customer = new Customer(fName, lName, email);
    var customer = new Customer(fName, lName, '');
    var fullName = customer.getFullName();
    document.getElementById("fullName").innerHTML = fullName;
}

function getEmail() {

    //var fName = document.getElementById("firstName").value;
    //var lName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    //var customer = new Customer(fName, lName, email);
    var customer = new Customer('', '', email);
    var emailAddress = customer.getEmailAddress();
    document.getElementById("emailId").innerHTML = emailAddress;
}

window.getFullName = getFullName;
window.getEmail = getEmail;