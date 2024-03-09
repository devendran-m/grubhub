function validateForm(event) {
    event.preventDefault();

    //console.log("Entering Form Validation JS");

    form = document.getElementById("registerForm");
    const username = form["username"].value;
    const email = form["email"].value;
    const password = form["password"].value;
    const confirmPassword = form["confirmPassword"].value;
    const policy = form["policy"].checked;

    //simple validation checks
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        //console.log("Username, Email & Password check");
        alert("All fields must be filled out");
        return false;
    }

    if (password !== confirmPassword) {
        //console.log("Password vs. Confirm Password check");
        alert("Passwords do not match");
        return false;
    }

    if(!policy) {
        //console.log("Policy check");
        alert("You must agree to the Terms & Conditions");
        return false;
    } 

    //If all checks pass, allow for submission
    alert("Thank you for registering with us");
    return true; //Proceed for form submission
}