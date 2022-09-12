//CONTACT FORM
function validateForm() {
    let x = document.forms["contact"]["name"].value;
    if (x == "") {
        alert("First Name must be filled out.");
        return false;
    }
    let em= document.forms["contact"]["email"].value;
    if (em == "") {
        alert("Email must be filled out.");
        return false;
    }
}
//END CONTACT FORM