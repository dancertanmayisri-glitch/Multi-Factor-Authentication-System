
let generatedOTP;

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        generatedOTP = Math.floor(100000 + Math.random() * 900000);

        document.getElementById("login").style.display = "none";
        document.getElementById("otp").style.display = "block";

        document.getElementById("otpMessage").innerText =
        "Demo OTP: " + generatedOTP;

    } else {
        document.getElementById("message").innerText =
        "Invalid Username or Password";
    }
}

function verifyOTP() {

    let enteredOTP = document.getElementById("otpInput").value;

    if (Number(enteredOTP) === generatedOTP) {

        document.getElementById("otp").style.display = "none";
        document.getElementById("success").style.display = "block";

        document.getElementById("message").innerText = "";

    } else {
        document.getElementById("message").innerText =
        "Invalid OTP! Try Again.";
    }
}

function logout() {

    document.getElementById("success").style.display = "none";
    document.getElementById("login").style.display = "block";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("otpInput").value = "";

    document.getElementById("message").innerText = "";
}
