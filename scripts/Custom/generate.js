var $ = require("jquery");
var htmlToImage = require('html-to-image');

$("#generate").click(function () {
    htmlToImage.toPng(document.getElementById('rendu'))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'rendu.png';
            link.href = dataUrl;
            link.click();
        });
})