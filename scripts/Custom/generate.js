var $ = require("jquery");
var htmlToImage = require('html-to-image');
var domtoimage = require('dom-to-image');

import '../html2canvas.js';

$("#generate").on("click", function () {
    htmlToImage.toPng(document.getElementById('rendu'))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'rendu.png';
            link.href = dataUrl;
            link.click();
        });


    /*h domtoimage.toBlob(document.getElementById('rendu'))
         .then(function (dataUrl) {
             var link = document.createElement('a');
             link.download = 'rendu.png';
             link.href = dataUrl;
             link.click();
         });
 
     html2canvas(document.querySelector("#rendu")).then(canvas => {
         var link = document.createElement('a');
         link.download = 'rendu.png';
         link.href = canvas;
         link.click();
     });*/

})