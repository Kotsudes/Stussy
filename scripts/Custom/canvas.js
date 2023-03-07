var $ = require("jquery");


$("#ratio").on('change', function () {
    if ($("#ratio").val() == "1:1") {
        $("#rendu").css("width", "900px");
        $("#rendu").css("height", "900px");
    }
    if ($("#ratio").val() == "4:3") {
        $("#rendu").css("width", "900px");
        $("#rendu").css("height", "675px");
    }
    if ($("#ratio").val() == "5:4") {
        $("#rendu").css("width", "900px");
        $("#rendu").css("height", "720px");
    }
    if ($("#ratio").val() == "5:2") {
        $("#rendu").css("width", "900px");
        $("#rendu").css("height", "360px");
    }
    if ($("#ratio").val() == "16:9") {
        $("#rendu").css("width", "900px");
        $("#rendu").css("height", "506.25px");
    }
    if ($("#ratio").val() == "21:9") {
        $("#rendu").css("width", "900px");
        $("#rendu").css("height", "385.71px");
    }
    if ($("#ratio").val() == "2.39:1") {
        $("#rendu").css("width", "900px");
        $("#rendu").css("height", "450px");
    }
    if ($("#ratio").val() == "4:5") {
        $("#rendu").css("width", "720px");
        $("#rendu").css("height", "900px");
    }
    if ($("#ratio").val() == "1.19:1") {
        $("#rendu").css("width", "900px");
        $("#rendu").css("height", "756px");
    }
});