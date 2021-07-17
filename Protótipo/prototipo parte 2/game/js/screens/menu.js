game.MenuScreen = me.Stage.extend({
    /**
     * action to perform on state change
     */
    onResetEvent: function () {
        // new sprite for the title screen, position at the center of the game viewport
        var backgroundImage = new me.Sprite(
            me.game.viewport.width / 2,
            me.game.viewport.height / 2,
            {
                image: me.loader.getImage("title_screen")
            }
        );

        // scale to fit with the viewport size
        backgroundImage.scale(
            me.game.viewport.width / backgroundImage.width,
            me.game.viewport.height / backgroundImage.height
        );

        // add to the world container
        me.game.world.addChild(backgroundImage, 1);

        me.game.world.addChild(
            new (me.Renderable.extend({
                // constructor
                init: function () {
                    this._super(me.Renderable, "init", [
                        0,
                        0,
                        me.game.viewport.width,
                        me.game.viewport.height
                    ]);

                    // font for the scrolling text
                    this.font = new me.BitmapText(0, 0, {
                        font: "PressStart2P"
                    });

                    this.scroller =
                        "JOGO PARA O APOIO DE ENSINO E APRENDIZAGEM DE ORIENTACAO A OBJETOS";
                    this.scrollerpos = 600;

                    // a tween to animate the arrow
                    this.scrollertween = new me.Tween(this)
                        .to({ scrollerpos: -2200 }, 10000)
                        .onComplete(this.scrollover.bind(this))
                        .start();
                },

                // some callback for the tween objects
                scrollover: function () {
                    // reset to default value
                    this.scrollerpos = 1000;
                    this.scrollertween
                        .to({ scrollerpos: -2200 }, 10000)
                        .onComplete(this.scrollover.bind(this))
                        .start();
                },

                update: function (dt) {

                    me.event.subscribe(me.event.KEYDOWN, function (action, keyCode) {
                        if (me.input.isKeyPressed("space"))
                        {
                            var y = document.getElementById("screen");
                            y.style.display = "block";
                            document.getElementById("initialScreen").style.display = "none";

                            //me.input.bindKey(me.input.KEY.SPACE,  "other");

                        }
                    })
                    return true;
                },

                draw: function (renderer) {
                    this.font.textAlign = "center";
                    this.font.draw(
                        renderer,
                        "PRESSIONE ENTER PARA COMECAR",
                        me.game.viewport.width,
                        720,
                    );
                    this.font.textAlign = "left";
                    this.font.draw(
                        renderer,
                        this.scroller,
                        this.scrollerpos,
                        440
                    );
                },
                onDestroyEvent: function () {
                    //just in case
                    this.scrollertween.stop();
                }
            }))(),
            2
        );

        // change to play state on press Enter or click/tap
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER);
        this.handler = me.event.subscribe(
            me.event.KEYDOWN,
            function (action, keyCode, edge) {
                if (action === "enter") {
                    // play something on tap / enter
                    // this will unlock audio on mobile devices
                    me.state.change(me.state.PLAY);
                }
            }
        );
    },

    /**
     * action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function () {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindPointer(me.input.pointer.LEFT);
        me.event.unsubscribe(this.handler);
    }
});
