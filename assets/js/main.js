// This document contains logic for setting up the play area, defining global variables to be used in game-logic.js
// pre-defines assets for loading, and loads our game.

// Setup our Global variables
let titleScreen;
let mainScreen;
let endScreen;
let app;
let ship;
let enemy;
let enemiesVertical = [];
let enemySpeed = 5;
let asteroid;
let asteroidSpeed = 4;
let keys = {};
let keysDiv;
let bullet;
let bullets = [];
let bulletspeed = 3;
let reloadSpeed = 0.2;
let reloading = 0;
let inputFire = false;
let enemyBullets = [];
let enemyBulletSpeed = 5;
let backgroundBack;
let backgroundMiddle;
let backgroundFront;
let backgroundX = 0;
let backgroundSpeed = 2;
let startGame;
let titleText;
let gameOverText;
let comets = [];
let scoreText;
let score = 0;
let pointsEnemy = 100;

// Sets the canvas size and color to be loader to the onload PIXI method
// contains other setup oriented functions associated with the users play area (canvas)
window.onload = function() {
    app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x000000
        }


    );
    // Assign the game window canvas to a HTML div with the id game-window
    document.querySelector("#game-window").appendChild(app.view);
    // Tells the browser window to listen for when the user releases a key defined in the switchContainer function
    window.addEventListener("keyup", switchContainer);


    // Defines our Assets to preload in their own string names and where to find them
    // These are our background textures, and in game sprites
    app.loader.add("backgroundBack", "assets/images/stars-back.png");
    app.loader.add("backgroundMiddle", "assets/images/stars-backmiddle.png");
    app.loader.add("backgroundFront", "assets/images/stars-backfront.png");
    app.loader.add("asteroid", "assets/images/asteroid.png");
    app.loader.add("bullet", "assets/images/bullet.png");
    app.loader.add("ship", "assets/images/ship.png");
    app.loader.add("enemy", "assets/images/enemy.png");
    app.loader.add("enemyBullet", "assets/images/enemyBullet.png");

    // Adds the showProgress function to the PIXI method onProgress in the loader
    app.loader.onProgress.add(showProgress);
    // Adds the doneLoading function to the PIXI method onComplete in the loader
    app.loader.onComplete.add(doneLoading);
    // Adds the reportError function the the PIXI method onError in the loader
    app.loader.onError.add(reportError);

    // Calls the loader to begin loading
    app.loader.load();

    // For the the developer: console logs a progress report in numerical values to show how the assets in the loader are loading
    function showProgress(e) {
        console.log(e.progress);
    }

    // This function fires functions that show, the parallaxing background, title text, allow the game to start
    // and draws our first asteroid and enemy, but does not move the enemy or asteroid
    function doneLoading(e) {
        console.log("Launching...");
        app.ticker.add(gameLoop);
        initBackground();
        gameName();
        startScreen();
        drawPlayer();
        drawEnemy();
        asteroidPhase();

    }

    // Shows an Alert box to the user if the assets added in the loader could not be loaded
    function reportError(e) {
        console.error("ERROR:" + e.message);
        alert("Could Not Load Assets!!")
    }

    // This sets up the Background textures (stored in variables) to be used in the background tiling
    function initBackground() {
        backgroundBack = createBackground(app.loader.resources["backgroundBack"].texture);
        backgroundMiddle = createBackground(app.loader.resources["backgroundMiddle"].texture);
        backgroundFront = createBackground(app.loader.resources["backgroundFront"].texture);

    }

    // setup screens //
    titleScreen = new PIXI.Container();
    mainScreen = new PIXI.Container();
    endScreen = new PIXI.Container();

    mainScreen.visible = false;
    endScreen.visible = false;

    app.stage.addChild(endScreen);

    // Keyboard event handlers allows us to listen for when a user presses a key and lifts it on the keyboard
    window.addEventListener("keydown", keyDown, );
    window.addEventListener("keyup", keyUp);

    // Allows us to track and call specific keys on the keyboard
    keysDiv = document.querySelector("#keys");

};