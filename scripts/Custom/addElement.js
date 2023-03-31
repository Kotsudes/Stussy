var $ = require("jquery");
import { Text } from '../Models/Text.js';
import { Image } from '../Models/Image.js'
import { Grid } from '../Models/Grid.js';
import { Rect } from '../Models/Rect.js';

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
            var n = objects.push(new Image($("#nom" + id).val().replaceAll(" ", "_"), "", 0, 0, 0, 0, 0, 400, 400, 400, false))
            objects[n - 1].initialisation();
        }

        // TEXTE --------------------------------------------------------------------------------------------------
        else if ($(this).val() == "text") {
            var n = objects.push(new Text($("#nom" + id).val().replaceAll(" ", "_"), "Super test", 0, 0, 0, 0, 0, 14, 500, "Glacial Indifference Regular", false, false, "#FFFFFF", "#000000", [], false, false, false, null, 0, 0, 300, false, "text"))
            objects[n - 1].initialisation();
        }

        // GRILLE DE TEXTE ------------------------------------------------------------------------------------------------
        else if ($(this).val() == "grid") {
            var n = objects.push(new Grid($("#nom" + id).val().replaceAll(" ", "_"), [], 1, 0, 0, 0, 400, 100, 24, 400, "Glacial Indifference Regular", false, false, "#FFFFFF", false, "grid"))
            objects[n - 1].initialisation();
        }

        else if ($(this).val() == "rect") {
            var n = objects.push(new Rect($("#nom" + id).val().replaceAll(" ", "_"), 0, 0, 0, 0, 200, 200, "#FFFFFF", "rect"))
            objects[n - 1].initialisation();
        }

        $(this).parent().remove();
    });
    element++;
})