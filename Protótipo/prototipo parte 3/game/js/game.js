/**
 * main
 */
var game = {
    /**
     *
     * Initialize the application
     */
    onload: function () {
        // init the video
        if (!me.video.init(1280, 720, { parent: "screen", scale: "auto", scaleMethod: "fit", style:"width:100px"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // set all ressources to be loaded
        me.loader.preload(game.resources, this.loaded.bind(this));

        const firebaseConfig = {
            apiKey: "AIzaSyAZ-niOH2G1TNblAIzTgIcQzGYbvpJCK_4",
            authDomain: "jogooo-d4fc9.firebaseapp.com",
            databaseURL: "https://jogooo-d4fc9-default-rtdb.firebaseio.com",
            projectId: "jogooo-d4fc9",
            storageBucket: "jogooo-d4fc9.appspot.com",
            messagingSenderId: "533547861045",
            appId: "1:533547861045:web:8f2b0b50cbaf4e80cf1d7c"
        };
        firebase.initializeApp(firebaseConfig);
    },

    /**
     * callback when everything is loaded
     */
    loaded: function () {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.state.set(me.state.MENU, new game.MenuScreen());

        // set the fade transition effect
        me.state.transition("fade", "#FFFFFF", 250);

        // register our objects entity in the object pool
        me.pool.register("mainPlayer", game.PlayerEntity);

        // switch to PLAY state
        me.state.change(me.state.MENU);
    }
};
