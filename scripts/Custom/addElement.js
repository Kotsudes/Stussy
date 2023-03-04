var $ = require("jquery");

let element = 0

$("#new").click(function () {
    $("#target").append("<div><div id='" + element + "' class='hidden'></div><label>Nom de l'élément : </label><input id='nom" + element + "' type='text' value='Element n°" + element + "'><select id='s" + element + "'>"
        + "<option value='none'>Sélectionnez le type :</option>"
        + "<option value='image'>Image</option>"
        + "<option value='text'>Texte</option>"
        + "<option value='grid'>Grille de texte</option>"
        + "<option value='rect'>Rectangle</option>"
        + "</select></div>");


    $("#s" + element).on('change', function () {
        let id = $(this).parent().children().first().attr('id');

        // IMAGE --------------------------------------------------------------------------------------------------
        if ($(this).val() == "image") {
            $("#rendu").append("<img id='img" + id + "' class='absolute'></img>");

            $("#target").append("<div id='t" + id + "' class='grid grid-cols-3 justify-items-center'><spam>" + $("#nom" + id).val() + "</spam><div class='grid grid-cols-2 justify-items-center'><label>Z-index</label><input id='z" + id + "' type='number' placeholder='Entrez la hauteur'></div> <input class='justify-self-end mr-2' checked id='v" + id + "' name='visible' type='radio'></div>");
            $("#z" + id).on('change', function () {
                $("#img" + id).css('z-index', $("#z" + id).val());
            });

            $("#parameters").append("<div id='p" + id + "' class='overflow-y-auto grid grid-cols-2 gap-y-2 mx-2 my-1   '>"
                + "<label>Src :</label>"
                + "<input id='img" + id + "src' type='file' accept='.jpg,.jpeg,.png,.svg,.webp' class='border border-lg'>"
                + "<label>Top :</label>"
                + "<input id='img" + id + "top' type='number' class='border border-lg'>"
                + "<label>Left :</label>"
                + "<input id='img" + id + "left' type='number' class='border border-lg'>"
                + "<label>Width :</label>"
                + "<input id='img" + id + "width' type='number' class='border border-lg'>"
                + "</div>");
            $("#img" + id + "src").on('change', function () {
                const reader = new FileReader()
                reader.addEventListener("load", () => {
                    $("#img" + id).attr('src', reader.result);
                })
                reader.readAsDataURL(this.files[0]);
            })

            $("#img" + id + "top").on('change', function () {
                $("#img" + id).css('top', $("#img" + id + "top").val() + "px");
            })
            $("#img" + id + "left").on('change', function () {
                $("#img" + id).css('left', $("#img" + id + "left").val() + "px");
            })
            $("#img" + id + "width").on('change', function () {
                $("#img" + id).css('width', $("#img" + id + "width").val() + "px");
            })
        }

        // TEXTE --------------------------------------------------------------------------------------------------
        else if ($(this).val() == "text") {
            $("#rendu").append("<div id='spam" + id + "' class='absolute grid justify-items-center'><spam id='spam" + id + "text'>Placeholder</spam></div>");

            $("#target").append("<div id='t" + id + "' class='grid grid-cols-3 justify-items-center'><spam>" + $("#nom" + id).val() + "</spam><div class='grid grid-cols-2 justify-items-center'><label>Z-index</label><input id='z" + id + "' type='number' placeholder='Entrez la hauteur'></div> <input class='justify-self-end mr-2' checked id='v" + id + "' name='visible' type='radio'></div>");
            $("#z" + id).on('change', function () {
                $("#spam" + id).css('z-index', $("#z" + id).val());
            });

            $("#parameters").append("<div id='p" + id + "' class='overflow-y-auto grid grid-cols-2 gap-y-2 mx-2 my-1   '>"
                + "<label>Texte :</label>"
                + "<textarea id='spam" + id + "textarea' class='border border-lg'></textarea>"
                + "<label>Top :</label>"
                + "<input id='spam" + id + "top' type='number' class='border border-lg'>"
                + "<label>Left :</label>"
                + "<input id='spam" + id + "left' type='number' class='border border-lg'>"
                + "<label>Width :</label>"
                + "<input id='spam" + id + "width' type='number' class='border border-lg'>"
                + "<label>Font size :</label>"
                + "<input id='spam" + id + "size' type='number' class='border border-lg'>"
                + "<label>Font weight :</label>"
                + "<input id='spam" + id + "weight' type='number' step='100' min='100' max='900' class='border border-lg'>"
                + "<label>Italic :</label>"
                + "<input id='spam" + id + "italic' type='checkbox'>"
                + "<label>Couleur :</label>"
                + "<input id='spam" + id + "color' type='color'>"
                + "<label>Police</label>"
                + "<select id='spam" + id + "font'><option value='a Another Tag'>A Another Tag</option> <option value='BilboINC'>Bilbol NC</option> <option value='Drive Corps'>Drive Corps</option> <option value='Drive Corps Italic'>Drive Corps Italic</option> <option value='Outward-Block'>Outward Block</option> <option value='VALORANT'>Valorant</option><option value='Glacial Indifference Regular'>Glacial Indifference Regular</option></select>"
                + "</div>");
            $("#spam" + id + "textarea").on('change', function () {
                $("#spam" + id + "text").text($("#spam" + id + "textarea").val());
            })
            $("#spam" + id + "top").on('change', function () {
                $("#spam" + id).css('top', $("#spam" + id + "top").val() + "px");
            })
            $("#spam" + id + "left").on('change', function () {
                $("#spam" + id).css('left', $("#spam" + id + "left").val() + "px");
            })
            $("#spam" + id + "width").on('change', function () {
                $("#spam" + id).css('width', $("#spam" + id + "width").val() + "px");
            })
            $("#spam" + id + "size").on('change', function () {
                $("#spam" + id + "text").css('font-size', $("#spam" + id + "size").val() + "px");
            })
            $("#spam" + id + "weight").on('change', function () {
                $("#spam" + id + "text").css('font-weight', $("#spam" + id + "weight").val());
            })
            $("#spam" + id + "italic").on('change', function () {
                if ($("#spam" + id + 'italic').prop("checked") == true) {
                    $("#spam" + id + "text").css('font-style', 'italic');
                }
                else {
                    $("#spam" + id + "text").css('font-style', 'normal');
                }
            })
            $("#spam" + id + "color").on('change', function () {
                $("#spam" + id + "text").css('color', $("#spam" + id + "color").val());
            })
            $("#spam" + id + "font").on('change', function () {
                $("#spam" + id + "text").css('font-family', $("#spam" + id + "font").val());
            })
        }

        // GRILLE DE TEXTE ------------------------------------------------------------------------------------------------
        else if ($(this).val() == "grid") {
            $("#rendu").append("<div id='grid" + id + "' class='absolute grid justify-items-center'></div>");
            $("#target").append("<div id='t" + id + "' class='grid grid-cols-[2fr_3.5fr_4fr_0.5fr] justify-items-center'><spam>" + $("#nom" + id).val() + "</spam><div class='grid grid-cols-2 justify-items-center'><label>Z-index</label><input id='z" + id + "' type='number' placeholder='Entrez la hauteur'></div><div><label>Nombre de texte :</label><input id='grid" + id + "number' type='number'></div><input class='justify-self-end mr-2' checked id='v" + id + "' name='visible' type='radio'></div>");
            $("#z" + id).on('change', function () {
                $("#spam" + id).css('z-index', $("#z" + id).val());
            });

            $("#parameters").append("<div id='p" + id + "' class='grid grid-cols-2 gap-y-2 mx-2 my-1'>"
                + "<div id='grid" + id + "text' class='col-span-2 grid grid-cols-2'></div>"
                + "<label>Top :</label>"
                + "<input id='grid" + id + "top' type='number' class='border border-lg'>"
                + "<label>Left :</label>"
                + "<input id='grid" + id + "left' type='number' class='border border-lg'>"
                + "<label>Width :</label>"
                + "<input id='grid" + id + "width' type='number' class='border border-lg'>"
                + "<label>Font size :</label>"
                + "<input id='grid" + id + "size' type='number' class='border border-lg'>"
                + "<label>Font weight :</label>"
                + "<input id='grid" + id + "weight' type='number' step='100' min='100' max='900' class='border border-lg'>"
                + "<label>Italic :</label>"
                + "<input id='grid" + id + "italic' type='checkbox'>"
                + "<label>Couleur :</label>"
                + "<input id='grid" + id + "color' type='color'>"
                + "<label>Police</label>"
                + "<select id='grid" + id + "font'><option value='a Another Tag'>A Another Tag</option> <option value='BilboINC'>Bilbol NC</option> <option value='Drive Corps'>Drive Corps</option> <option value='Drive Corps Italic'>Drive Corps Italic</option> <option value='Outward-Block'>Outward Block</option> <option value='VALORANT'>Valorant</option></select>"
                + "</div>");

            $("#grid" + id + "number").on('change', function () {
                $("#grid" + id + "selector").empty();
                $("#grid" + id).empty();
                $("#grid" + id).empty();
                $("#grid" + id + "text").empty();
                $("#grid" + id).css("grid-template-columns", "repeat(" + $("#grid" + id + "number").val() + ", minmax(0, 1fr))");
                for (let i = 0; i < $("#grid" + id + "number").val(); i++) {
                    $("#grid" + id + "text").append("<label>Texte n°" + i + ": </label><input id='spam" + id + "text" + i + "' type='text'>");

                    $("#grid" + id).append("<spam class='text-center' id='grid" + id + "spam" + i + "'>Placeholder</spam>");

                    $("#spam" + id + "text" + i).on('change', function () {
                        $("#grid" + id + "spam" + i).text($("#spam" + id + "text" + i).val());
                    })
                }

                $("#grid" + id + "top").on('change', function () {
                    $("#grid" + id).css('top', $("#grid" + id + "top").val() + "px");
                })
                $("#grid" + id + "left").on('change', function () {
                    $("#grid" + id).css('left', $("#grid" + id + "left").val() + "px");
                })
                $("#grid" + id + "width").on('change', function () {
                    $("#grid" + id).css('width', $("#grid" + id + "width").val() + "px");
                })
                $("#grid" + id + "size").on('change', function () {
                    for (let i = 0; i < $("#grid" + id + "number").val(); i++) {
                        $("#grid" + id + "spam" + i).css('font-size', $("#grid" + id + "size").val() + "px");
                    }
                })
                $("#grid" + id + "weight").on('change', function () {
                    for (let i = 0; i < $("#grid" + id + "number").val(); i++) {
                        $("#grid" + id + "spam" + i).css('font-weight', $("#grid" + id + "weight").val());
                    }
                })
                $("#grid" + id + "italic").on('change', function () {
                    for (let i = 0; i < $("#grid" + id + "number").val(); i++) {
                        if ($("#grid" + id + 'italic').prop("checked") == true) {
                            $("#grid" + id + "spam" + i).css('font-style', 'italic');
                        }
                        else {
                            $("#grid" + id + "spam" + i).css('font-style', 'normal');
                        }
                    }
                })
                $("#grid" + id + "color").on('change', function () {
                    for (let i = 0; i < $("#grid" + id + "number").val(); i++) {
                        $("#grid" + id + "spam" + i).css('color', $("#grid" + id + "color").val());
                    }
                })
                $("#grid" + id + "font").on('change', function () {
                    for (let i = 0; i < $("#grid" + id + "number").val(); i++) {
                        $("#grid" + id + "spam" + i).css('font-family', $("#grid" + id + "font").val());
                    }
                })


            })
        }

        else if ($(this).val() == "rect") {
            $("#rendu").append("");
            $(this).parent().append("");
        }

        $(this).parent().remove();
    });
    element++;
})