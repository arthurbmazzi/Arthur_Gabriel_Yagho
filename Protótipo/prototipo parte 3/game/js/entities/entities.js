
/************************************************************************************/
/*                                                                                  */
/*        a player entity                                                           */
/*                                                                                  */
/************************************************************************************/
var userId = "1";

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

        var data = false;

        data = existOnDB(userId);

        if (data)    {
            //salva todas as informações do DB no localStorage
            getOnDB(userId);
        }
        else {
            localStorage.setItem("score", 0);
            localStorage.setItem("tasks", 0);
            localStorage.setItem("tips", 0);
            localStorage.setItem("currentLevel", 0);
            localStorage.setItem("levelPass", false);
        }
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
            if (response.b.id == 348)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(1);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass && localStorage.tasks === "0")
                    {
                        localStorage.setItem("tasks", 1);
                        localStorage.setItem("score", 10);
                        saveOnDB(userId);
                    }
                }
                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
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
                    console.log();
                    if (localStorage.levelPass && localStorage.tasks === "1")
                    {
                        localStorage.setItem("tasks", 2);
                        localStorage.setItem("score", 20);
                        saveOnDB(userId);
                    }
                }
                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
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
                    if (localStorage.levelPass && localStorage.tasks === "2")
                    {
                        localStorage.setItem("tasks", 3);
                        localStorage.setItem("score", 30);
                        saveOnDB(userId);
                    }
                }
                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
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
                    if (localStorage.levelPass && localStorage.tasks === "3")
                    {
                        localStorage.setItem("tasks", 4);
                        localStorage.setItem("score", 40);
                        saveOnDB(userId);
                    }
                }
                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
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
                    if (localStorage.levelPass && localStorage.tasks === "4")
                    {
                        localStorage.setItem("tasks", 5);
                        localStorage.setItem("score", 50);
                        saveOnDB(userId);
                    }
                }
                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                localStorage.setItem("levelPass", false);
            }
            if (response.b.id == 165)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(6);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass)
                    {
                        me.save.score = 6;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
                saveOnDB(userId, name);
            }
            if (response.b.id == 212)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(7);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass)
                    {
                        me.save.score = 7;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
                saveOnDB(userId, name);
            }
            if (response.b.id == 234)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(8);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass)
                    {
                        me.save.score = 8;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
                saveOnDB(userId, name);
            }
            if (response.b.id == 297)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(9);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass)
                    {
                        me.save.score = 9;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
                saveOnDB(userId, name);
            }
            if (response.b.id == 249)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(10);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass)
                    {
                        me.save.score = 10;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
                saveOnDB(userId, name);
            }
            if (response.b.id == 308)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    showQuestion(11);
                    localStorage.setItem("levelPass", true);
                    if (localStorage.levelPass)
                    {
                        me.save.score = 11;
                        localStorage.setItem("tasks", me.save.score);
                    }
                }

                console.log("tasks: " + localStorage.tasks, "tips: " + localStorage.tips, "levelPass: " + localStorage.levelPass);
                console.log(JSON.stringify(me.save));
                localStorage.setItem("levelPass", false);
                saveOnDB(userId, name);
            }
            if (response.b.id == 60)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    var x = document.getElementById("didatico1");
                    x.style.display = "block";
                }
            }
            if (response.b.id == 364)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    var x = document.getElementById("didatico2");
                    x.style.display = "block";
                }
            }
            if (response.b.id == 365)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    var x = document.getElementById("didatico3");
                    x.style.display = "block";
                }
            }
            if (response.b.id == 59)
            {
                var x = document.getElementById("hint");
                x.style.display = "block";

                if (me.input.isKeyPressed("interact"))
                {
                    var x = document.getElementById("didatico4");
                    x.style.display = "block";
                }
            }
        }
        return true;
    }
});
