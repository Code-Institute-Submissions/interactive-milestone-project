
let titleScreen;
let mainScreen;
let endScreen;
let app;
let ship;
let enemy;
let enemies = [];
let asteroid;
let asteroidSpeed = 2;
let keys = {};
let keysDiv;
let bullet;
let bullets = [];
let bulletspeed = 5;
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
let pointsAsteroid = 10;
let pointsEnemy = 50;



// load and set the canvas window //
window.onload = function() {
    app =  new PIXI.Application(
        {
            width: 800,
            height: 600,
            backgroundColor: 0x000000
        }
        

    );
    // Assign the game window canvas to a HTML div //
    document.querySelector("#game-window").appendChild(app.view);
    window.addEventListener("keyup", switchContainer);


    // Preload Assets //
    app.loader.add("backgroundBack", "assets/images/stars-back.png");
    app.loader.add("backgroundMiddle", "assets/images/stars-backmiddle.png");
    app.loader.add("backgroundFront", "assets/images/stars-backfront.png");
    app.loader.add("asteroid", "assets/images/asteroid.png");
    app.loader.add("bullet", "assets/images/bullet.png");
    app.loader.add("ship", "assets/images/ship.png");
    app.loader.add("enemy", "assets/images/enemy.png");
    app.loader.add("enemyBullet", "assets/images/enemyBullet.png");

    app.loader.onProgress.add(showProgress);
    app.loader.onComplete.add(doneLoading);
    app.loader.onError.add(reportError);

    app.loader.load();


    function showProgress(e) {
        console.log(e.progress);
    }

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

    function reportError(e) {
        console.error("ERROR:" + e.message);
        alert("Could Not Load Assets!!")
    }

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

    // Keyboard event handlers //
    window.addEventListener("keydown", keyDown,);
    window.addEventListener("keyup", keyUp);
    app.stage.on("keydown", keyDown); {
        inputFire = true;
    };

    keysDiv = document.querySelector("#keys");

};

