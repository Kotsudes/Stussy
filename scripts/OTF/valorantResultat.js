var $ = require("jquery");

//---------------------------------------------------------------------------------------------------

$("#zfond_noir").on('change', function () {
    $("#fond_noir").css('z-index', $("#zfond_noir").val());
});

$("fond_noirsrc").on('change', function () {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        $("#fond_noir").attr('src', reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})

$("#fond_noirtop").val($("#fond_noir").css("top").slice(0, -2))
$("#fond_noirtop").on("change", function () {
    $("#fond_noir").css("top", $("#fond_noirtop").val() + "px")
});

$("#fond_noirleft").val($("#fond_noir").css("left").slice(0, -2))
$("#fond_noirleft").on("change", function () {
    $("#fond_noir").css("left", $("#fond_noirleft").val() + "px")
});

$("#fond_noirwidth").val(900)
$("#fond_noirwidth").on("change", function () {
    $("#fond_noir").css("width", $("#fond_noirwidth").val() + "px")
});

//---------------------------------------------------------------------------------------------------

$("#zfond_forme").on('change', function () {
    $("#fond_forme").css('z-index', $("#zfond_forme").val());
});

$("fond_formesrc").on('change', function () {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        $("#fond_forme").attr('src', reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})

$("#fond_formetop").val($("#fond_forme").css("top").slice(0, -2))
$("#fond_formetop").on("change", function () {
    $("#fond_forme").css("top", $("#fond_formetop").val() + "px")
});

$("#fond_formeleft").val($("#fond_forme").css("left").slice(0, -2))
$("#fond_formeleft").on("change", function () {
    $("#fond_forme").css("left", $("#fond_formeleft").val() + "px")
});

$("#fond_formewidth").val(900)
$("#fond_formewidth").on("change", function () {
    $("#fond_forme").css("width", $("#fond_formewidth").val() + "px")
});


//---------------------------------------------------------------------------------------------------

$("#zbarre_blanche").on('change', function () {
    $("#barre_blanche").css('z-index', $("#zbarre_blanche").val());
});

$("barre_blanchesrc").on('change', function () {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        $("#barre_blanche").attr('src', reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})

$("#barre_blanchetop").val(800); $("#barre_blanche").css("top", "796px")
$("#barre_blanchetop").on("change", function () {
    $("#barre_blanche").css("top", $("#barre_blanchetop").val() + "px")
});

$("#barre_blancheleft").val($("#barre_blanche").css("left").slice(0, -2))
$("#barre_blancheleft").on("change", function () {
    $("#barre_blanche").css("left", $("#barre_blancheleft").val() + "px")
});

$("#barre_blanchewidth").val(900)
$("#barre_blanchewidth").on("change", function () {
    $("#barre_blanche").css("width", $("#barre_blanchewidth").val() + "px")
});


//---------------------------------------------------------------------------------------------------

$("#zlogo_gold").on('change', function () {
    $("#logo_gold").css('z-index', $("#zlogo_gold").val());
});

$("logo_goldsrc").on('change', function () {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        $("#logo_gold").attr('src', reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})

$("#logo_goldtop").val(800); $("#logo_gold").css("top", "802px")
$("#logo_goldtop").on("change", function () {
    $("#logo_gold").css("top", $("#logo_goldtop").val() + "px")
});

$("#logo_goldleft").val(5); $("#logo_gold").css("left", "5px")
$("#logo_goldleft").on("change", function () {
    $("#logo_gold").css("left", $("#logo_goldleft").val() + "px")
});

$("#logo_goldwidth").val(90); $("#logo_gold").css("width", "90px")
$("#logo_goldwidth").on("change", function () {
    $("#logo_gold").css("width", $("#logo_goldwidth").val() + "px")
});

//---------------------------------------------------------------------------------------------------

$("#zlogo_black").on('change', function () {
    $("#logo_black").css('z-index', $("#zlogo_black").val());
});

$("logo_blacksrc").on('change', function () {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        $("#logo_black").attr('src', reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})

$("#logo_blacktop").val(800); $("#logo_black").css("top", "802px")
$("#logo_blacktop").on("change", function () {
    $("#logo_black").css("top", $("#logo_blacktop").val() + "px")
});

$("#logo_blackleft").val(102); $("#logo_black").css("left", "102px")
$("#logo_blackleft").on("change", function () {
    $("#logo_black").css("left", $("#logo_blackleft").val() + "px")
});

$("#logo_blackwidth").val(90); $("#logo_black").css("width", "90px")
$("#logo_blackwidth").on("change", function () {
    $("#logo_black").css("width", $("#logo_blackwidth").val() + "px")
});

//---------------------------------------------------------------------------------------------------

$("#zdevinci").on('change', function () {
    $("#devinci").css('z-index', $("#zdevinci").val());
});

$("devincisrc").on('change', function () {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        $("#devinci").attr('src', reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})

$("#devincitop").val(822); $("#devinci").css("top", "822px")
$("#devincitop").on("change", function () {
    $("#devinci").css("top", $("#devincitop").val() + "px")
});

$("#devincileft").val(614); $("#devinci").css("left", "614px")
$("#devincileft").on("change", function () {
    $("#devinci").css("left", $("#devincileft").val() + "px")
});

$("#devinciwidth").val(96); $("#devinci").css("width", "96px")
$("#devinciwidth").on("change", function () {
    $("#devinci").css("width", $("#devinciwidth").val() + "px")
});

//---------------------------------------------------------------------------------------------------

$("#zotf").on('change', function () {
    $("#otf").css('z-index', $("#zotf").val());
});

$("otfsrc").on('change', function () {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        $("#otf").attr('src', reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})

$("#otftop").val(817); $("#otf").css("top", "817px")
$("#otftop").on("change", function () {
    $("#otf").css("top", $("#otftop").val() + "px")
});

$("#otfleft").val(352); $("#otf").css("left", "352px")
$("#otfleft").on("change", function () {
    $("#otf").css("left", $("#otfleft").val() + "px")
});

$("#otfwidth").val(246); $("#otf").css("width", "246px")
$("#otfwidth").on("change", function () {
    $("#otf").css("width", $("#otfwidth").val() + "px")
});

//--------------------------------------------------------------------------------------------------------------------

$("#zpitiflan").on('change', function () {
    $("#pitiflan").css('z-index', $("#zpitiflan").val());
});

$("#pitiflantextarea").on('change', function () {
    $("#pitiflantext").text($("#pitiflantextarea").val());
})

$("#pitiflantop").val(38); $("#pitiflan").css("top", "38px")
$("#pitiflantop").on('change', function () {
    $("#pitiflan").css('top', $("#pitiflantop").val() + "px");
})

$("#pitiflanleft").val(39); $("#pitiflan").css("left", "39px")
$("#pitiflanleft").on('change', function () {
    $("#pitiflan").css('left', $("#pitiflanleft").val() + "px");
})
$("#pitiflanwidth").on('change', function () {
    $("#pitiflan").css('width', $("#pitiflanwidth").val() + "px");
})

$("#pitiflansize").val(24); $("#pitiflantext").css("font-size", "24px");
$("#pitiflansize").on('change', function () {
    $("#pitiflantext").css('font-size', $("#pitiflansize").val() + "px");
})
$("#pitiflanweight").on('change', function () {
    $("#pitiflantext").css('font-weight', $("#pitiflanweight").val());
})
$("#pitiflanitalic").on('change', function () {
    if ($("#pitiflanitalic").prop("checked") == true) {
        $("#pitiflantext").css('font-style', 'italic');
    }
    else {
        $("#pitiflantext").css('font-style', 'normal');
    }
})
$("#pitiflancolor").on('change', function () {
    $("#pitiflantext").css('color', $("#pitiflancolor").val());
})
$("#pitiflanfont").on('change', function () {
    $("#pitiflantext").css('font-family', $("#pitiflanfont").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#zdtk").on('change', function () {
    $("#dtk").css('z-index', $("#zdtk").val());
});

$("#dtktextarea").on('change', function () {
    $("#dtktext").text($("#dtktextarea").val());
})
$("#dtktop").val(38); $("#dtk").css("top", "38px")
$("#dtktop").on('change', function () {
    $("#dtk").css('top', $("#dtktop").val() + "px");
})

$("#dtkleft").val(194); $("#dtk").css("left", "194px")
$("#dtkleft").on('change', function () {
    $("#dtk").css('left', $("#dtkleft").val() + "px");
})
$("#dtkwidth").on('change', function () {
    $("#dtk").css('width', $("#dtkwidth").val() + "px");
})

$("#dtksize").val(24); $("#dtktext").css("font-size", "24px");
$("#dtksize").on('change', function () {
    $("#dtktext").css('font-size', $("#dtksize").val() + "px");
})
$("#dtkweight").on('change', function () {
    $("#dtktext").css('font-weight', $("#dtkweight").val());
})
$("#dtkitalic").on('change', function () {
    if ($("#dtkitalic").prop("checked") == true) {
        $("#dtktext").css('font-style', 'italic');
    }
    else {
        $("#dtktext").css('font-style', 'normal');
    }
})
$("#dtkcolor").on('change', function () {
    $("#dtktext").css('color', $("#dtkcolor").val());
})
$("#dtkfont").on('change', function () {
    $("#dtktext").css('font-family', $("#dtkfont").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#ztutur").on('change', function () {
    $("#tutur").css('z-index', $("#ztutur").val());
});

$("#tuturtextarea").on('change', function () {
    $("#tuturtext").text($("#tuturtextarea").val());
})

$("#tuturtop").val(38); $("#tutur").css("top", "38px")
$("#tuturtop").on('change', function () {
    $("#tutur").css('top', $("#tuturtop").val() + "px");
})

$("#tuturleft").val(286); $("#tutur").css("left", "286px")
$("#tuturleft").on('change', function () {
    $("#tutur").css('left', $("#tuturleft").val() + "px");
})

$("#tuturwidth").on('change', function () {
    $("#tutur").css('width', $("#tuturwidth").val() + "px");
})

$("#tutursize").val(24); $("#tuturtext").css("font-size", "24px");
$("#tutursize").on('change', function () {
    $("#tuturtext").css('font-size', $("#tutursize").val() + "px");
})

$("#tuturweight").on('change', function () {
    $("#tuturtext").css('font-weight', $("#tuturweight").val());
})

$("#tuturitalic").on('change', function () {
    if ($("#tuturitalic").prop("checked") == true) {
        $("#tuturtext").css('font-style', 'italic');
    }
    else {
        $("#tuturtext").css('font-style', 'normal');
    }
})

$("#tuturcolor").on('change', function () {
    $("#tuturtext").css('color', $("#tuturcolor").val());
})

$("#tuturfont").on('change', function () {
    $("#tuturtext").css('font-family', $("#tuturfont").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#znayzouille").on('change', function () {
    $("#nayzouille").css('z-index', $("#znayzouille").val());
});

$("#nayzouilletextarea").on('change', function () {
    $("#nayzouilletext").text($("#nayzouilletextarea").val());
})

$("#nayzouilletop").val(38); $("#nayzouille").css("top", "38px")
$("#nayzouilletop").on('change', function () {
    $("#nayzouille").css('top', $("#nayzouilletop").val() + "px");
})

$("#nayzouilleleft").val(406); $("#nayzouille").css("left", "406px")
$("#nayzouilleleft").on('change', function () {
    $("#nayzouille").css('left', $("#nayzouilleleft").val() + "px");
})

$("#nayzouillewidth").on('change', function () {
    $("#nayzouille").css('width', $("#nayzouillewidth").val() + "px");
})

$("#nayzouillesize").val(24); $("#nayzouilletext").css("font-size", "24px");
$("#nayzouillesize").on('change', function () {
    $("#nayzouilletext").css('font-size', $("#nayzouillesize").val() + "px");
})

$("#nayzouilleweight").on('change', function () {
    $("#nayzouilletext").css('font-weight', $("#nayzouilleweight").val());
})

$("#nayzouilleitalic").on('change', function () {
    if ($("#nayzouilleitalic").prop("checked") == true) {
        $("#nayzouilletext").css('font-style', 'italic');
    }
    else {
        $("#nayzouilletext").css('font-style', 'normal');
    }
})

$("#nayzouillecolor").on('change', function () {
    $("#nayzouilletext").css('color', $("#nayzouillecolor").val());
})

$("#nayzouillefont").on('change', function () {
    $("#nayzouilletext").css('font-family', $("#nayzouillefont").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#zadriex9").on('change', function () {
    $("#adriex9").css('z-index', $("#zadriex9").val());
});

$("#adriex9textarea").on('change', function () {
    $("#adriex9text").text($("#adriex9textarea").val());
})

$("#adriex9top").val(38); $("#adriex9").css("top", "38px")
$("#adriex9top").on('change', function () {
    $("#adriex9").css('top', $("#adriex9top").val() + "px");
})

$("#adriex9left").val(583); $("#adriex9").css("left", "583px")
$("#adriex9left").on('change', function () {
    $("#adriex9").css('left', $("#adriex9left").val() + "px");
})

$("#adriex9width").on('change', function () {
    $("#adriex9").css('width', $("#adriex9width").val() + "px");
})

$("#adriex9size").val(24); $("#adriex9text").css("font-size", "24px");
$("#adriex9size").on('change', function () {
    $("#adriex9text").css('font-size', $("#adriex9size").val() + "px");
})
$("#adriex9weight").on('change', function () {
    $("#adriex9text").css('font-weight', $("#adriex9weight").val());
})
$("#adriex9italic").on('change', function () {
    if ($("#adriex9italic").prop("checked") == true) {
        $("#adriex9text").css('font-style', 'italic');
    }
    else {
        $("#adriex9text").css('font-style', 'normal');
    }
})

$("#adriex9color").val("#FFFFFF"); $("#adriex9text").css("color", "#FFFFFF");
$("#adriex9color").on('change', function () {
    $("#adriex9text").css('color', $("#adriex9color").val());
})
$("#adriex9font").on('change', function () {
    $("#adriex9text").css('font-family', $("#adriex9font").val());
})

//--------------------------------------------------------------------------------------------------------------------

$("#zscore").on('change', function () {
    $("#score").css('z-index', $("#zscore").val());
});

$("#scoretextarea").on('change', function () {
    $("#scoretext").text($("#scoretextarea").val());
})

$("#scoretop").val(791); $("#score").css("top", "791px")
$("#scoretop").on('change', function () {
    $("#score").css('top', $("#scoretop").val() + "px");
})

$("#scoreleft").val(220); $("#score").css("left", "220px")
$("#scoreleft").on('change', function () {
    $("#score").css('left', $("#scoreleft").val() + "px");
})

$("#scorewidth").val(100); $("#score").css("width", "100px")
$("#scorewidth").on('change', function () {
    $("#score").css('width', $("#scorewidth").val() + "px");
})

$("#scoresize").val(83); $("#scoretext").css("font-size", "83px");
$("#scoresize").on('change', function () {
    $("#scoretext").css('font-size', $("#scoresize").val() + "px");
})
$("#scoreweight").on('change', function () {
    $("#scoretext").css('font-weight', $("#scoreweight").val());
})
$("#scoreitalic").on('change', function () {
    if ($("#scoreitalic").prop("checked") == true) {
        $("#scoretext").css('font-style', 'italic');
    }
    else {
        $("#scoretext").css('font-style', 'normal');
    }
})

$("#scorecolor").val("#000000"); $("#scoretext").css("color", "#000000");
$("#scorecolor").on('change', function () {
    $("#scoretext").css('color', $("#scorecolor").val());
})
$("#scorefont").on('change', function () {
    $("#scoretext").css('font-family', $("#scorefont").val());
})

//--------------------------------------------------------------------------------------------------------------------
/*
$("#zresultat").on('change', function () {
    $("#resultat").css('z-index', $("#zresultat").val());
});

$("#resultattextarea").on('change', function () {
    $("#resultattext").text($("#resultattextarea").val());
})

$("#resultattop").val(-124); $("#resultat").css("top", "-124px")
$("#resultattop").on('change', function () {
    $("#resultat").css('top', $("#resultattop").val() + "px");
})

$("#resultatleft").val(10); $("#resultat").css("left", "10px")
$("#resultatleft").on('change', function () {
    $("#resultat").css('left', $("#resultatleft").val() + "px");
})

$("#resultatwidth").val(690); $("#resultat").css("width", "690px")
$("#resultatwidth").on('change', function () {
    $("#resultat").css('width', $("#resultatwidth").val() + "px");
})

$("#resultatsize").val(640); $("#resultattext").css("font-size", "640px");
$("#resultatsize").on('change', function () {
    $("#resultattext").css('font-size', $("#resultatsize").val() + "px");
})
$("#resultatweight").on('change', function () {
    $("#resultattext").css('font-weight', $("#resultatweight").val());
})
$("#resultatitalic").on('change', function () {
    if ($("#resultatitalic").prop("checked") == true) {
        $("#resultattext").css('font-style', 'italic');
    }
    else {
        $("#resultattext").css('font-style', 'normal');
    }
})

$("#resultatcolor").val("#FFFFFF"); $("#resultattext").css("color", "#FFFFFF");
$("#resultatcolor").on('change', function () {
    $("#resultattext").css('color', $("#resultatcolor").val());
})

$("#resultattext").css("font-family", "Outward-Block");

$("#resultatmap").on('change', function () {
    console.log("../../assets/OTF/Valorant/Assets/" + $("#resultatmap").val() + ".webp")
    $("#resultattext").css('background-image', 'url("../../assets/OTF/Valorant/Assets/"' + $("#resultatmap").val() + '".webp")');
})
*/