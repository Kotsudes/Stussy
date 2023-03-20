var $ = require("jquery");

export class Image {
    constructor(name, src = "", x = 0, y = 0, z = 0, width = 0, maxwidth = 600, maxheight = 600, showbox = false) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
        this.src = src;
        this.width = width;
        this.maxwidth = maxwidth;
        this.maxheight = maxheight;
        this.showbox = showbox;
    }

    initialisation() {
        this.target();
        this.rendu();
        this.parameters();
        this.binding();
    }

    rendu() {
        $("#rendu").append("<div id='" + this.name + "' class='absolute grid place-items-center'><img id='" + this.name + "image'></div>");
    }

    target() {
        $("#target").append("<div id='t" + this.name + "' class='grid grid-cols-3 justify-items-center'><spam>" + this.name + "</spam>"
            + "<div class='grid grid-cols-2 justify-items-center'><label>Z-index</label><input id='z" + this.name + "' type='number' placeholder='Entrez la hauteur'>"
            + "</div> <input class='justify-self-end mr-2' checked id='v" + this.name + "' name='visible' type='radio'></div>");

    }

    parameters() {
        $("#parameters").append("<div id='p" + this.name + "' class='overflow-y-auto grid grid-cols-2 gap-y-2 mx-2 my-1'></div>");
        if (this.src != null) {
            $("#p" + this.name).append("<label>Image :</label>"
                + "<input id='" + this.name + "src' value='" + this.src + "' type='file' accept='.jpg,.jpeg,.png,.svg,.webp,.jfif'>");
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
        if (this.maxwidth != null) {
            $("#p" + this.name).append("<label>Max width :</label>"
                + "<input id='" + this.name + "width' type='number' value='" + this.maxwidth + "' class='border border-lg'>");
        }
        if (this.maxheight != null) {
            $("#p" + this.name).append("<label>Max height :</label>"
                + "<input id='" + this.name + "width' type='number' value='" + this.maxheight + "' class='border border-lg'>");
        }
        if (this.showbox != null) {
            $("#p" + this.name).append("<label>Show box :</label>"
                + "<input id='" + this.name + "showbox' value='" + this.showbox + "' type='checkbox'>");
        }
    }

    changeZ(self) {
        $("#" + self.name).css('z-index', $("#z" + self.name).val());
    }

    changeSrc(self) {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            $("#" + self.name + "image").attr('src', "url('" + reader.result + "')");
        })
        reader.readAsDataURL($("#" + self.name + "src")[0].files[0]);
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
        $("#" + self.name + "image").css('width', self.width + "px");
    }

    changeMaxwidth(self) {
        self.maxwidth = $("#" + self.name + "width").val();
        $("#" + self.name).css('width', self.maxwidth + "px");
    }

    changeMaxheigth(self) {
        self.maxheight = $("#" + self.name + "height").val();
        $("#" + self.name).css('height', self.maxheight + "px");
    }

    changeShobox(self) {
        if ($("#" + self.name + 'showbox').prop("checked") == true) {
            $("#" + self.name).css('background-color', 'rgb(6 95 70)');
        }
        else {
            $("#" + self.name).css('background-color', 'rgba(0,0,0,0)');
        }
    }



    binding() {
        $("#" + this.name + "src").on('change', this.changeSrc.bind(null, this));

        $("#" + this.name + "top").on('change', this.changeY.bind(null, this));

        $("#" + this.name + "left").on('change', this.changeX.bind(null, this));

        $("#" + this.name + "width").on('change', this.changeWidth.bind(null, this));

        $("#" + this.name + "maxwidth").on('change', this.changeMaxwidth.bind(null, this));

        $("#" + this.name + "maxheight").on('change', this.changeMaxheigth.bind(null, this));

        $("#" + this.name + "showbox").on('change', this.changeShobox.bind(null, this));
    }
}