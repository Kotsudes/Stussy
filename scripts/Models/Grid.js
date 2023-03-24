var $ = require("jquery");
const fonts = ["a Another Tag", "BilboINC", "Drive Corps", "Drive Corps Italic", "Outward-Block", "VALORANT", "Glacial Indifference Regular"];

export class Grid {
    constructor(name, text = [], number = 0, x = 0, y = 0, z = 0, width = 0, height = 0, font_size = 14, font_weight = 500, font_family = "Glacial Indifference Regular", italic = false, underline = false, color = "#FFFFFF", showbox = false, type = "grid") {
        this.type = type;
        this.name = name;
        this.text = text;
        this.number = number;
        this.x = x;
        this.y = y;
        this.z = z;
        this.width = width;
        this.height = height;
        this.font_size = font_size;
        this.font_weight = font_weight;
        this.font_family = font_family;
        this.color = color;
        this.italic = italic;
        this.underline = underline;
        this.showbox = showbox;
    }

    static from(json) {
        return Object.assign(new Grid(), json);
    }

    initialisation() {
        this.target();
        this.rendu();
        this.parameters();
        this.binding();
    }

    rendu() {
        $("#rendu").append("<div id='" + this.name + "' class='absolute grid place-items-center'></div>");
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
                + "<textarea id='" + this.name + "textarea' rows='" + this.number + "' class='border border-lg'>" + this.text + "</textarea>");
        }

        if (this.number != null) {
            $("#p" + this.name).append("<label>Nombre de texte :</label>"
                + "<input id='" + this.name + "number' min=0 type='number' value='" + this.number + "' class='border border-lg'>");
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
    }

    changeZ(self) {
        $("#" + self.name).css('z-index', $("#z" + self.name).val());
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

    changeHeight(self) {
        self.height = $("#" + self.name + "height").val();
        $("#" + self.name).css('height', self.height + "px");
    }

    changeSize(self) {
        self.font_size = $("#" + self.name + "size").val();
        $("#" + self.name).css('font-size', self.font_size + "px");
    }

    changeWeight(self) {
        self.font_weight = $("#" + self.name + "weight").val();
        $("#" + self.name).css('font-weight', self.font_weight);
    }

    changeFont(self) {
        self.font_family = $("#" + self.name + "font").val();
        $("#" + self.name).css('font-family', self.font_family);
    }

    changeItalic(self) {
        self.italic = $("#" + self.name + 'italic').prop("checked");
        if (self.italic == true) {
            $("#" + self.name).css('font-style', 'italic');
        }
        else {
            $("#" + self.name).css('font-style', 'normal');
        }
    }

    changeUnderline(self) {
        self.underline = $("#" + self.name + 'underline').prop("checked");
        if (self.underline == true) {
            $("#" + self.name).css('text-decoration', 'underline');
        }
        else {
            $("#" + self.name).css('text-decoration', 'none');
        }
    }

    changeColor(self) {
        self.color = $("#" + self.name + "color").val();
        $("#" + self.name).css('color', self.color);
    }

    changeShobox(self) {
        if ($("#" + self.name + 'showbox').prop("checked") == true) {
            $("#" + self.name).css('background-color', 'rgb(6 95 70)');
        }
        else {
            $("#" + self.name).css('background-color', 'rgba(0,0,0,0)');
        }
    }

    changeText(self) {
        $("#" + self.name).empty()
        self.text = $("#" + self.name + "textarea").val().split('\n');
        for (let i = 0; i < self.number; i++) {
            $("#" + self.name).append("<spam>" + self.text[i] + "</spam>");
        }
    }

    changeNumber(self) {
        self.number = $("#" + self.name + "number").val();
        $("#" + self.name).empty();
        $("#" + self.name + "textarea").attr("rows", self.number);
        $("#" + self.name).css("grid-template-columns", "repeat(" + $("#" + self.name + "number").val() + ", minmax(0, 1fr))");

        self.text = $("#" + self.name + "textarea").val().split('\n');
        for (let i = 0; i < self.number; i++) {
            $("#" + self.name).append("<spam class='text-center'>" + self.text[i] + "</spam>");
        }
    }

    binding() {
        $("#z" + this.name).on('change', this.changeZ.bind(null, this));

        $("#" + this.name + "textarea").on('change', this.changeText.bind(null, this));

        $("#" + this.name + "number").on('change', this.changeNumber.bind(null, this));

        $("#" + this.name + "top").on('change', this.changeY.bind(null, this));

        $("#" + this.name + "left").on('change', this.changeX.bind(null, this));

        $("#" + this.name + "width").on('change', this.changeWidth.bind(null, this));

        $("#" + this.name + "height").on('change', this.changeHeight.bind(null, this));

        $("#" + this.name + "size").on('change', this.changeSize.bind(null, this));

        $("#" + this.name + "weight").on('change', this.changeWeight.bind(null, this));

        $("#" + this.name + "font").on('change', this.changeFont.bind(null, this));

        $("#" + this.name + "italic").on('change', this.changeItalic.bind(null, this));

        $("#" + this.name + "underline").on('change', this.changeUnderline.bind(null, this));

        $("#" + this.name + "color").on('change', this.changeColor.bind(null, this));

        $("#" + this.name + "showbox").on('change', this.changeShobox.bind(null, this));
    }
}









