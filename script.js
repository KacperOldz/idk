$(document).ready(() => {
    var passwordLanguage = "hasło";

    $("#add").click(() => {
        var output = "";

        output += $("#link").val() + "\n";
        output += "link: " + $("#link").val() + "/wp-admin\n";

        if ($("#login").val() != "") {
            output += "login: " + $("#login").val() + "\n";
        } else {
            output += "login: admin\n";
        }

        output += passwordLanguage + ": " + $("#password").val() + "\n\n";

        $("#output").val($("#output").val() + output);
    });

    $("#passwordLanguage").click(() => {
        if (passwordLanguage == "hasło") {
            passwordLanguage = "password";
            $("#passwordLanguage").text("password");
        } else {
            passwordLanguage = "hasło";
            $("#passwordLanguage").text("hasło");
        }
    });
});
