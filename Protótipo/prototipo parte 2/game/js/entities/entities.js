
/************************************************************************************/
/*                                                                                  */
/*        a player entity                                                           */
/*                                                                                  */
/************************************************************************************/
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        this._super(me.Entity, "init", [x, y, settings]);

        // walking & jumping speed
        this.body.setVelocity(2.5, 2.5);
        this.body.setFriction(0.4, 0.4);

        // set the display around our position
        me.game.viewport.follow(this, me.game.viewport.AXIS.BOTH);

        // enable keyboard
        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP,    "up");
        me.input.bindKey(me.input.KEY.DOWN,  "down");
        me.input.bindKey(me.input.KEY.P,  "pause", true);
        me.input.bindKey(me.input.KEY.SPACE, "space");
        me.input.bindKey(me.input.KEY.I, "interact");

        // the main player spritesheet
        var texture =  new me.video.renderer.Texture(
            { framewidth: 32, frameheight: 64 },
            me.loader.getImage("Sprite")
        );

        // create a new sprite object
        this.renderable = texture.createAnimationFromName([0]);

        // define an additional walking animation
        // this.renderable.addAnimation("down_walk", []);
        // this.renderable.addAnimation("left_walk", []);
        // this.renderable.addAnimation("right_walk", []);
        // this.renderable.addAnimation("up_walk", []);

        // set the renderable position to bottom center
        this.anchorPoint.set(0.5, 0.5);

        // chamada da tela de login

        // buscar no firebase os valores e se não existirem colocar como 0
        // se score não esta salvo então score = 0
        me.save.score = 0;
        localStorage.setItem("tasks", me.save.score);
        localStorage.setItem("tips", 0);
        localStorage.setItem("levelPass", false);
    },

    /* -----

        update the player pos

    ------            */
    update : function (dt) {

        //this.renderable.setCurrentAnimation("up_walk");

        if (me.input.isKeyPressed("left")) {
            //this.renderable.setCurrentAnimation("left_walk");
            // update the entity velocity
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed("right")) {
            //this.renderable.setCurrentAnimation("right_walk");
            // update the entity velocity
            this.body.vel.x += this.body.accel.x * me.timer.tick;
        } else {
            this.body.vel.x = 0;
        }
        if (me.input.isKeyPressed("up")) {
            // update the entity velocity
            this.body.vel.y -= this.body.accel.y * me.timer.tick;
        } else if (me.input.isKeyPressed("down")) {
            //this.renderable.setCurrentAnimation("down_walk");
            // update the entity velocity
            this.body.vel.y += this.body.accel.y * me.timer.tick;
        } else {
            this.body.vel.y = 0;
        }
        me.event.subscribe(me.event.KEYDOWN, function (action, keyCode) {
            // Checking unbound keys
            if (keyCode === me.input.KEY.P) {
                var x = document.getElementById("pauseMenu");
                var y = document.getElementById("screen");

                if (x.style.display === "none") {
                  x.style.display = "block";
                  x.style.opacity = 1;
                } else {
                  x.style.display = "none";
                }
            }
        });

        if (me.input.isKeyPressed("space"))
        {
            var y = document.getElementById("screen");
            y.style.display = "block";
            document.getElementById("initialScreen").style.display = "none";

            //me.input.bindKey(me.input.KEY.SPACE,  "other");
        }

        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        // handle collisions against other shapes
        me.collision.check(this);

        // check if we moved (an "idle" animation would definitely be cleaner)
        if (this.body.vel.x !== 0 || this.body.vel.y !== 0) {
            this._super(me.Entity, "update", [dt]);
            return true;
        }
    },

    /**
     * colision handler
     */
    onCollision : function (response) {
        if (response.b.body.collisionType ==  me.collision.types.WORLD_SHAPE)
        {
            if (response.b.id == 60)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(1);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass && me.save.score === 0)
                    {
                        me.save.score = 1;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
            }
            if (response.b.id == 102)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(2);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass && me.save.score === 1)
                    {
                        me.save.score = 2;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
            }
            if (response.b.id == 142)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(3);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass && me.save.score === 2)
                    {
                        me.save.score = 3;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
            }
            if (response.b.id == 107)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(4);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass && me.save.score === 3)
                    {
                        me.save.score = 4;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
            }
            if (response.b.id == 138)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(5);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass && me.save.score === 4)
                    {
                        me.save.score = 5;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
            }
        }
        return true;
    }
});
