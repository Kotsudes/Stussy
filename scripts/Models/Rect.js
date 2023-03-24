var $ = require("jquery");

export class Rect {
    constructor(name, x = 0, y = 0, z = 0, rotate, width = 0, height = 0, color = "#FFFFFF", type = "rect") {
        this.type = type;
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
        this.rotate = rotate;
        this.width = width;
        this.height = height;
        this.color = color;
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

        if (this.x != null) {
            $("#p" + this.name).append("<label>Top :</label>"
                + "<input id='" + this.name + "top' type='number' value='" + this.x + "' class='border border-lg'>");
        }

        if (this.y != null) {
            $("#p" + this.name).append("<label>Left :</label>"
                + "<input id='" + this.name + "left' type='number' value='" + this.y + "' class='border border-lg'>");
        }

        if (this.rotate != null) {
            $("#p" + this.name).append("<label>Rotate :</label>"
                + "<input id='" + this.name + "rotate' type='number' min=0 max=360 value='" + this.rotate + "' class='border border-lg'>");
        }

        if (this.width != null) {
            $("#p" + this.name).append("<label>Width :</label>"
                + "<input id='" + this.name + "width' type='number' value='" + this.width + "' class='border border-lg'>");
        }

        if (this.height != null) {
            $("#p" + this.name).append("<label>Height :</label>"
                + "<input id='" + this.name + "height' type='number' value='" + this.height + "' class='border border-lg'>");
        }

        if (this.color != null) {
            $("#p" + this.name).append("<label>Couleur :</label>"
                + "<input id='" + this.name + "color' value='" + this.color + "' type='color'>");
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

    changeRotate(self) {
        self.rotate = $("#" + self.name + "rotate").val();
        $("#" + self.name).css('transform', "rotate(" + self.rotate + "deg)");
    }

    changeWidth(self) {
        self.width = $("#" + self.name + "width").val();
        $("#" + self.name).css('width', self.width + "px");
    }

    changeHeight(self) {
        self.height = $("#" + self.name + "height").val();
        $("#" + self.name).css('height', self.height + "px");
    }

    changeColor(self) {
        self.color = $("#" + self.name + "color").val();
        $("#" + self.name).css('background-color', self.color);
    }

    binding() {
        $("#z" + this.name).on('change', this.changeZ.bind(null, this));

        $("#" + this.name + "top").on('change', this.changeY.bind(null, this));

        $("#" + this.name + "left").on('change', this.changeX.bind(null, this));

        $("#" + this.name + "rotate").on('change', this.changeRotate.bind(null, this));

        $("#" + this.name + "width").on('change', this.changeWidth.bind(null, this));

        $("#" + this.name + "height").on('change', this.changeHeight.bind(null, this));

        $("#" + this.name + "color").on('change', this.changeColor.bind(null, this));
    }
}









