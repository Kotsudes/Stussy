var $ = require("jquery");





$("#target").on('change', function () {
    $("input[name=visible").each(function () {
        if (this.checked) {
            $("#p" + this.id.slice(1)).removeClass("hidden");
        }
        else {
            $("#p" + this.id.slice(1)).addClass("hidden");
        }
    })
});