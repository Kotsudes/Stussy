var $ = require("jquery");
const fonts = ["a Another Tag", "BilboINC", "Drive Corps", "Drive Corps Italic", "Outward-Block", "VALORANT", "Glacial Indifference Regular"];

export class Text {
    constructor(name, text = "", x = 0, y = 0, z = 0, width = 0, height = 0, font_size = 14, font_weight = 500, font_family = "Glacial Indifference Regular", italic = false, underline = false, color = "#FFFFFF", subcolor = "#000000", subArray = [], showbox = false, hollow = false, hollowimage = null, imagex = 0, imagey = 0, imagewidth = 600, imagereapeat = false, type = "text") {
        this.type = type;
        this.name = name;
        this.text = text;
        this.textRendu = text;
        this.x = x;
        this.y = y;
        this.z = z;
        this.width = width;
        this.height = height;
        this.font_size = font_size;
        this.font_weight = font_weight;
        this.font_family = font_family;
        this.color = color;
        this.subcolor = subcolor;
        this.subArray = subArray;
        this.italic = italic;
        this.underline = underline;
        this.showbox = showbox;
        this.hollow = hollow;
        this.hollowimage = hollowimage;
        this.imagex = imagex;
        this.imagey = imagey;
        this.imagewidth = imagewidth;
        this.imagereapeat = imagereapeat;
    }

    static from(json) {
        return Object.assign(new Text(), json);
    }

    initialisation() {
        this.target();
        this.rendu();
        this.parameters();
        this.binding();
    }

    rendu() {
        // Ajout de la couleur spéciale pour le subtext
        this.subArray.forEach(element => {
            var mot = this.text.split(" ")[element];
            this.textRendu = this.textRendu.replace(mot, "<span style='color:" + this.subcolor + "'>" + mot + "</span>")
        });

        $("#rendu").append("<div id='" + this.name + "' class='absolute grid justify-items-center'><spam id='" + this.name + "text'>" + this.textRendu + "</spam></div>");
        $("#" + this.name + "text").css("-webkit-background-clip", "text");
        $("#" + this.name + "text").css("background-origin", "border-box");

    }

    target() {
        $("#target").append("<div id='t" + this.name + "' class='grid grid-cols-3 justify-items-center'><spam>" + this.name + "</spam>"
            + "<div class='grid grid-cols-2 justify-items-center'><label>Z-index</label><input id='z" + this.name + "' type='number' placeholder='Entrez la hauteur'>"
            + "</div> <input class='justify-self-end mr-2' checked id='v" + this.name + "' name='visible' type='radio'></div>");

    }

    parameters() {
        $("#parameters").append("<div id='p" + this.name + "' class='overflow-y-auto grid grid-cols-2 gap-y-2 mx-2 my-1'></div>");

        if (this.text != null) {
            $("#p" + this.name).append("<label>Texte :</label>"
                + "<textarea id='" + this.name + "textarea' class='border border-lg'>" + this.text + "</textarea>");
        }
        if (this.x != null) {
            $("#p" + this.name).append("<label>Top :</label>"
                + "<input id='" + this.name + "top' type='number' value='" + this.x + "' class='border border-lg'>");
        }
        if (this.y != null) {
            $("#p" + this.name).append("<label>Left :</label>"
                + "<input id='" + this.name + "left' type='number' value='" + this.y + "' class='border border-lg'>");
        }
        if (this.width != null) {
            $("#p" + this.name).append("<label>Width :</label>"
                + "<input id='" + this.name + "width' type='number' value='" + this.width + "' class='border border-lg'>");
        }
        if (this.height != null) {
            $("#p" + this.name).append("<label>Height :</label>"
                + "<input id='" + this.name + "height' type='number' value='" + this.height + "' class='border border-lg'>");
        }
        if (this.font_size != null) {
            $("#p" + this.name).append("<label>Font size :</label>"
                + "<input id='" + this.name + "size' type='number' value='" + this.font_size + "' class='border border-lg'>");
        }
        if (this.font_weight != null) {
            $("#p" + this.name).append("<label>Font weight :</label>"
                + "<input id='" + this.name + "weight' type='number' value='" + this.font_weight + "' step='100' min='100' max='900' class='border border-lg'>");
        }
        if (this.font_family != null) {
            var options = "";

            fonts.forEach(element => {
                if (this.font_family == element) {
                    options += "<option value='" + element + "' selected>" + element + "</option>"
                }
                else {
                    options += "<option value='" + element + "'>" + element + "</option>"
                }
            });


            $("#p" + this.name).append("<label>Font family</label>"
                + "<select id='" + this.name + "font'>"
                + options
                + "</select>");
        }
        if (this.color != null) {
            $("#p" + this.name).append("<label>Couleur :</label>"
                + "<input id='" + this.name + "color' value='" + this.color + "' type='color'>");
        }
        if (this.subcolor != null) {
            $("#p" + this.name).append("<label>Couleur sub :</label>"
                + "<input id='" + this.name + "subcolor' value='" + this.subcolor + "' type='color'>");
        }
        if (this.subArray != null) {
            var options = "";
            this.text.split(" ").forEach(element => {
                if (this.subArray.includes(element)) {
                    options += "<option value='" + element + "' selected>" + element + "</option>";
                }
                else {
                    options += "<option value='" + element + "'>" + element + "</option>";
                }
            })

            $("#p" + this.name).append("<label>Sub word array :</label>"
                + "<select multiple id='" + this.name + "subtext'>"
                + options
                + "</select>");
        }
        if (this.italic != null) {
            $("#p" + this.name).append("<label>Italic :</label>"
                + "<input id='" + this.name + "italic' value='" + this.italic + "' type='checkbox'>");
        }
        if (this.underline != null) {
            $("#p" + this.name).append("<label>Underline :</label>"
                + "<input id='" + this.name + "underline' value='" + this.underline + "' type='checkbox'>");
        }
        if (this.showbox != null) {
            $("#p" + this.name).append("<label>Show box :</label>"
                + "<input id='" + this.name + "showbox' value='" + this.showbox + "' type='checkbox'>");
        }
        if (this.hollow != null) {
            $("#p" + this.name).append("<label>Outlined text :</label>"
                + "<input id='" + this.name + "hollow' value='" + this.hollow + "' type='checkbox'>");
        }
        if (this.hollow != null) {
            $("#p" + this.name).append("<label>Text background :</label>"
                + "<input id='" + this.name + "hollowsrc' value='" + this.hollowsrc + "' type='file' accept='.jpg,.jpeg,.png,.svg,.webp,.jfif'>");
        }
        if (this.hollow != null) {
            $("#p" + this.name).append("<label>Text Image x :</label>"
                + "<input id='" + this.name + "imagex' type='number' value='" + this.imagex + "' class='border border-lg'>");
        }
        if (this.hollow != null) {
            $("#p" + this.name).append("<label>Text Image y :</label>"
                + "<input id='" + this.name + "imagey' type='number' value='" + this.imagey + "' class='border border-lg'>");
        }
        if (this.hollow != null) {
            $("#p" + this.name).append("<label>Text Image width :</label>"
                + "<input id='" + this.name + "imagewidth' type='number' value='" + this.imagewidth + "' class='border border-lg'>");
        }
        if (this.hollow != null) {
            $("#p" + this.name).append("<label>Text Image repeat :</label>"
                + "<input id='" + this.name + "imagerepeat' value='" + this.imagereapeat + "' type='checkbox'>");
        }
    }

    changeZ(self) {
        $("#" + self.name).css('z-index', $("#z" + self.name).val());
    }

    changeText(self) {
        self.text = $("#" + self.name + "textarea").val();

        self.textRendu = self.text;

        var options = "";
        self.text.split(" ").forEach(element => {
            if (self.subArray.includes(element)) {
                options += "<option value='" + element + "' selected>" + element + "</option>";
            }
            else {
                options += "<option value='" + element + "'>" + element + "</option>";
            }
        })
        $("#" + self.name + "subtext").empty();
        $("#" + self.name + "subtext").append(options);

        self.subArray = $("#" + self.name + "subtext").val();

        self.subArray.forEach(element => {
            self.textRendu = self.textRendu.replace(element, "<span style='color:" + self.subcolor + "'>" + element + "</span>")
        });

        $("#" + self.name + "text").html(self.textRendu);
    }

    changeY(self) {
        self.y = $("#" + self.name + "top").val();
        $("#" + self.name).css('top', self.y + "px");
    }

    changeX(self) {
        self.x = $("#" + self.name + "left").val();
        $("#" + self.name).css('left', self.x + "px");
    }

    changeWidth(self) {
        self.width = $("#" + self.name + "width").val();
        $("#" + self.name).css('width', self.width + "px");
    }

    changeSize(self) {
        self.font_size = $("#" + self.name + "size").val();
        $("#" + self.name + "text").css('font-size', self.font_size + "px");
    }

    changeWeight(self) {
        self.font_weight = $("#" + self.name + "weight").val();
        $("#" + self.name + "text").css('font-weight', self.font_weight);
    }

    changeFont(self) {
        self.font_family = $("#" + self.name + "font").val();
        $("#" + self.name + "text").css('font-family', self.font_family);
    }

    changeItalic(self) {
        self.italic = $("#" + self.name + 'italic').prop("checked");
        if (self.italic == true) {
            $("#" + self.name + "text").css('font-style', 'italic');
        }
        else {
            $("#" + self.name + "text").css('font-style', 'normal');
        }
    }

    changeUnderline(self) {
        self.underline = $("#" + self.name + 'underline').prop("checked");
        if (self.underline == true) {
            $("#" + self.name + "text").css('text-decoration', 'underline');
        }
        else {
            $("#" + self.name + "text").css('text-decoration', 'none');
        }
    }

    changeColor(self) {
        self.color = $("#" + self.name + "color").val();
        $("#" + self.name + "text").css('color', self.color);
    }

    changeSubcolor(self) {
        self.subcolor = $("#" + self.name + "subcolor").val();
        $("#" + self.name + "subtext").css('color', self.subcolor);
    }

    changeSubcolorArray(self) {

        self.textRendu = self.text;
        self.subArray = $("#" + self.name + "subtext").val();

        self.subArray.forEach(element => {
            self.textRendu = self.textRendu.replace(element, "<span style='color:" + self.subcolor + "'>" + element + "</span>")
        });

        $("#" + self.name + "text").html(self.textRendu);
    }

    changeShobox(self) {
        if ($("#" + self.name + 'showbox').prop("checked") == true) {
            $("#" + self.name).css('background-color', 'rgb(6 95 70)');
        }
        else {
            $("#" + self.name).css('background-color', 'rgba(0,0,0,0)');
        }
    }

    changeHollow(self) {
        if ($("#" + self.name + 'hollow').prop("checked") == true) {
            $("#" + self.name + "text").css('-webkit-text-stroke', '5px black');
            $("#" + self.name + "text").css('color', 'transparent');
        }
        else {
            $("#" + self.name + "text").css('-webkit-text-stroke', '0px black');
            $("#" + self.name + "text").css('color', self.color);
        }
    }

    changeHollowimage(self) {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            $("#" + self.name + "text").css('background-image', "url('" + reader.result + "')");
        })
        reader.readAsDataURL($("#" + self.name + "hollowsrc")[0].files[0]);
    }

    changeImagex(self) {
        self.imagex = $("#" + self.name + "imagex").val();
        $("#" + self.name + "text").css('background-position', self.imagex + "px " + self.imagey + "px");
    }

    changeImagey(self) {
        self.imagey = $("#" + self.name + "imagey").val();
        $("#" + self.name + "text").css('background-position', self.imagex + "px " + self.imagey + "px");
    }

    changeImagewidth(self) {
        self.imagewidth = $("#" + self.name + "imagewidth").val();
        $("#" + self.name + "text").css('background-size', self.imagewidth + "px");
    }

    changeImagerepeat(self) {
        if ($("#" + self.name + 'imagerepeat').prop("checked") == true) {
            $("#" + self.name + "text").css('background-repeat', 'repeat');
        }
        else {
            $("#" + self.name + "text").css('background-repeat', 'no-repeat');
        }
    }

    binding() {

        $("#z" + this.name).on('change', this.changeZ.bind(null, this));

        $("#" + this.name + "textarea").on('change', this.changeText.bind(null, this));

        $("#" + this.name + "top").on('change', this.changeY.bind(null, this));

        $("#" + this.name + "left").on('change', this.changeX.bind(null, this));

        $("#" + this.name + "width").on('change', this.changeWidth.bind(null, this));

        $("#" + this.name + "size").on('change', this.changeSize.bind(null, this));

        $("#" + this.name + "weight").on('change', this.changeWeight.bind(null, this));

        $("#" + this.name + "font").on('change', this.changeFont.bind(null, this));

        $("#" + this.name + "italic").on('change', this.changeItalic.bind(null, this));

        $("#" + this.name + "underline").on('change', this.changeUnderline.bind(null, this));

        $("#" + this.name + "color").on('change', this.changeColor.bind(null, this));

        $("#" + this.name + "subcolor").on('change', this.changeSubcolor.bind(null, this));

        $("#" + this.name + "subtext").on('change', this.changeSubcolorArray.bind(null, this));

        $("#" + this.name + "showbox").on('change', this.changeShobox.bind(null, this));

        $("#" + this.name + "hollow").on('change', this.changeHollow.bind(null, this));

        $("#" + this.name + "hollowsrc").on('change', this.changeHollowimage.bind(null, this));

        $("#" + this.name + "imagex").on('change', this.changeImagex.bind(null, this));

        $("#" + this.name + "imagey").on('change', this.changeImagey.bind(null, this));

        $("#" + this.name + "imagewidth").on('change', this.changeImagewidth.bind(null, this));

        $("#" + this.name + "imagerepeat").on('change', this.changeImagerepeat.bind(null, this));
    }
}