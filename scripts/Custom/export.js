var $ = require("jquery");
import { objects } from './addElement.js';


$("#export").on("click", function () {
    var myTemplate = JSON.stringify(objects);

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    download(myTemplate, 'export.json', 'text/plain');
});
