var $ = require("jquery");

//---------------------------------------------------------------------------------------------------

$("#zfond").on('change', function () {
    $("#fond").css('z-index', $("#zfond").val());
});

//---------------------------------------------------------------------------------------------------

$("#jeusrc").on('change', function () {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        $("#jeu").attr('src', reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})

$("#jeul").on('change', function () {
    $("#jeu").css('left', $("#jeul").val() + "px");
})

$("#jeut").on('change', function () {
    $("#jeu").css('top', $("#jeut").val() + "px");
})

$("#jeuh").val(360); $("#jeu").css("height", "360px")
$("#jeuh").on('change', function () {
    $("#jeu").css('height', $("#jeuh").val() + "px");
})



//---------------------------------------------------------------------------------------------------

$("#zevent").on('change', function () {
    $("#event").css('z-index', $("#zevent").val());
});

$("#eventtextarea").val("LDV EVENT")
$("#eventtextarea").on('change', function () {
    $("#eventtext").text($("#eventtextarea").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#ztheme").on('change', function () {
    $("#theme").css('z-index', $("#ztheme").val());
});

$("#themetextarea").val("Soiré Party")
$("#themetextarea").on('change', function () {
    $("#themetext").text($("#themetextarea").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#zdate").on('change', function () {
    $("#date").css('z-index', $("#zdate").val());
});

$("#datetextarea").val("Vendredi 31 mars 21h-??")
$("#datetextarea").on('change', function () {
    $("#datetext").text($("#datetextarea").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#zgame").on('change', function () {
    $("#game").css('z-index', $("#zgame").val());
});

$("#gametextarea").val("KCulture/Gartic/Skrible/CodeName")
$("#gametextarea").on('change', function () {
    $("#gametext").text($("#gametextarea").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#zhost1").on('change', function () {
    $("#host").css('z-index', $("#zhost1").val());
});

$("#host1textarea").val("Host par")
$("#host1textarea").on('change', function () {
    $("#host1text").text($("#host1textarea").val());
})

$("#zhost2").on('change', function () {
    $("#host2").css('z-index', $("#zhost2").val());
});

$("#host2textarea").val("Jun")
$("#host2textarea").on('change', function () {
    $("#host2text").text($("#host2textarea").val());
})

