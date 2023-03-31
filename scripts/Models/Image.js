var $ = require("jquery");

export class Image {
    constructor(name, src = "", x = 0, y = 0, z = 0, imagex = 0, imagey = 0, width = 0, maxwidth = 400, maxheight = 400, showbox = false, type = "image") {
        this.type = type;
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
        this.imagex = imagex;
        this.imagey = imagey;
        this.src = src;
        this.width = width;
        this.maxwidth = maxwidth;
        this.maxheight = maxheight;
        this.showbox = showbox;
    }

    static from(json) {
        return Object.assign(new Image(), json);
    }

    initialisation() {
        this.target();
        this.rendu();
        this.parameters();
        this.binding();
    }

    rendu() {
        $("#rendu").append("<div id='" + this.name + "' class='absolute grid place-items-center overflow-hidden'><div id='" + this.name + "wrapper' class='relative'><img id='" + this.name + "image' class='relative'></div></div>");
    }

    target() {
        $("#target").append("<div id='t" + this.name + "' class='grid grid-cols-3 justify-items-center overflow-hidden'><spam>" + this.name + "</spam>"
            + "<div class='grid grid-cols-2 justify-items-center'><label>Z-index</label><input id='z" + this.name + "' type='number' value='" + this.z + "' placeholder='Entrez la hauteur'>"
            + "</div> <input class='justify-self-end mr-2' checked id='v" + this.name + "' name='visible' type='radio'></div>");

    }

    parameters() {
        $("#parameters").append("<div id='p" + this.name + "' class='overflow-y-auto grid grid-cols-2 gap-y-2 mx-2 my-1'></div>");
        if (this.src != null) {
            $("#p" + this.name).append("<label>Image :</label>"
                + "<input id='" + this.name + "src' value='" + this.src + "' type='file' accept='.jpg,.jpeg,.png,.svg,.webp,.jfif'>");
        }
        if (this.y != null) {
            $("#p" + this.name).append("<label>Container top :</label>"
                + "<input id='" + this.name + "top' type='number' value='" + this.y + "' class='border border-lg'>");
        }
        if (this.x != null) {
            $("#p" + this.name).append("<label>Container left :</label>"
                + "<input id='" + this.name + "left' type='number' value='" + this.x + "' class='border border-lg'>");
        }
        if (this.imagex != null) {
            $("#p" + this.name).append("<label>Image left :</label>"
                + "<input id='" + this.name + "imagetop' type='number' value='" + this.imagex + "' class='border border-lg'>");
        }
        if (this.imagey != null) {
            $("#p" + this.name).append("<label>Image top :</label>"
                + "<input id='" + this.name + "imageleft' type='number' value='" + this.imagey + "' class='border border-lg'>");
        }
        if (this.width != null) {
            $("#p" + this.name).append("<label>Width :</label>"
                + "<input id='" + this.name + "width' type='number' value='" + this.width + "' class='border border-lg'>");
        }
        if (this.maxwidth != null) {
            $("#p" + this.name).append("<label>Max width :</label>"
                + "<input id='" + this.name + "maxwidth' type='number' value='" + this.maxwidth + "' class='border border-lg'>");
        }
        if (this.maxheight != null) {
            $("#p" + this.name).append("<label>Max height :</label>"
                + "<input id='" + this.name + "maxheight' type='number' value='" + this.maxheight + "' class='border border-lg'>");
        }
        if (this.showbox != null) {
            $("#p" + this.name).append("<label>Show box :</label>"
                + "<input id='" + this.name + "showbox' value='" + this.showbox + "' type='checkbox'>");
        }
    }

    changeZ(self) {
        self.z = $("#z" + self.name).val();
        $("#" + self.name).css('z-index', self.z);
    }

    changeSrc(self) {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            self.src = reader.result;
            $("#" + self.name + "image").attr('src', self.src);
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

    changeImagey(self) {
        self.imagey = $("#" + self.name + "imagetop").val();
        $("#" + self.name + "wrapper").css('top', self.imagey + "px");
    }

    changeImagex(self) {
        self.imagex = $("#" + self.name + "imageleft").val();
        $("#" + self.name + "wrapper").css('left', self.imagex + "px");
    }

    changeWidth(self) {
        self.width = $("#" + self.name + "width").val();
        $("#" + self.name + "wrapper").css('width', self.width + "px");
        $("#" + self.name + "image").css('width', self.width + "px");
    }

    changeMaxwidth(self) {
        self.maxwidth = $("#" + self.name + "maxwidth").val();
        $("#" + self.name).css('width', self.maxwidth + "px");
    }

    changeMaxheigth(self) {
        self.maxheight = $("#" + self.name + "maxheight").val();
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
        $("#z" + this.name).on('change', this.changeZ.bind(null, this));
        $("#" + this.name).css('z-index', this.z);

        $("#" + this.name + "src").on('change', this.changeSrc.bind(null, this));
        $("#" + this.name + "image").attr('src', this.src);

        $("#" + this.name + "top").on('change', this.changeY.bind(null, this));
        $("#" + this.name).css('top', this.y + "px");

        $("#" + this.name + "left").on('change', this.changeX.bind(null, this));
        $("#" + this.name).css('left', this.x + "px");

        $("#" + this.name + "imagetop").on('change', this.changeImagey.bind(null, this));
        $("#" + this.name + "wrapper").css('top', this.imagey + "px");

        $("#" + this.name + "imageleft").on('change', this.changeImagex.bind(null, this));
        $("#" + this.name + "wrapper").css('left', this.imagex + "px");

        $("#" + this.name + "width").on('change', this.changeWidth.bind(null, this));
        $("#" + this.name + "wrapper").css('width', this.width + "px");
        $("#" + this.name + "image").css('width', this.width + "px");

        $("#" + this.name + "maxwidth").on('change', this.changeMaxwidth.bind(null, this));
        $("#" + this.name).css('width', this.maxwidth + "px");

        $("#" + this.name + "maxheight").on('change', this.changeMaxheigth.bind(null, this));
        $("#" + this.name).css('height', this.maxheight + "px");

        $("#" + this.name + "showbox").on('change', this.changeShobox.bind(null, this));
    }
}









