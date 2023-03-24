var $ = require("jquery");

import { Image } from "../Models/Image.js";
import { Text } from "../Models/Text.js";
import { objects } from "./addElement.js"

$("#import").on("click", function () {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

        // getting a hold of the file reference
        var file = e.target.files[0];

        // setting up the reader
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');

        // here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
            var content = readerEvent.target.result;
            var obj = JSON.parse(content);

            obj.forEach(element => {
                if (element['type'] == "text") {
                    var n = objects.push(Text.from(element));
                    objects[n - 1].initialisation();
                }
                else if (element['type'] == "image") {
                    var n = objects.push(Image.from(element));
                    objects[n - 1].initialisation();
                }
                else if (element['type'] == "grid") {
                    var n = objects.push(Grid.from(element));
                    objects[n - 1].initialisation();
                }
                else if (element['type'] == "rect") {
                    var n = objects.push(Rect.from(element));
                    objects[n - 1].initialisation();
                }
            });
        }

    }

    input.click();
});