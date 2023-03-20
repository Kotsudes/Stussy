var $ = require("jquery");
import { Text } from '../Models/Text.js';
import { Image } from '../Models/Image.js'

let element = 0
var objects = []
export { objects };

$("#new").on("click", function () {
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
            objects.push(new Image($("#nom" + id).val().replace(" ", "_"), "", 0, 0, 0, 600, 600, 600, false))
            objects[id].initialisation();
        }

        // TEXTE --------------------------------------------------------------------------------------------------
        else if ($(this).val() == "text") {
            objects.push(new Text($("#nom" + id).val().replace(" ", "_"), "Super test", 0, 0, 0, 0, 0, 14, 500, "Glacial Indifference Regular", false, false, "#FFFFFF", "#000000", []))
            objects[id].initialisation();
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