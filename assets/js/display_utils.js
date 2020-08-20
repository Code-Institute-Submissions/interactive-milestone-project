// This document contains a collection of functions pertaining largely to objects that are drawn
// onscreen.

// This function sets up and updates our score
function displayScore() {

    scoreText = new PIXI.Text("Score:");
    scoreText.anchor.set(0);
    scoreText.x = app.view.width - 790;
    scoreText.y = app.view.height - 590;
    scoreText.visible = false;
    scoreText.style = new PIXI.TextStyle({
        fill: 0xffFFFF,
        fontSize: 14,
        fontFamily: "Lucida Console",
        fontStyle: "normal",
        strokeThickness: 0
    })
    scoreText.text = "Score: " + score;
};

function createBackground(texture) {
    let tiling = new PIXI.TilingSprite(texture, 800, 600);
    tiling.position.set(0, 0);
    app.stage.addChild(tiling);

    return tiling;
};

// This function draws an asteroid in the centre of the screens width
function asteroidPhase() {
    asteroid = PIXI.Sprite.from(app.loader.resources.asteroid.texture);
    asteroid.anchor.set(0.5);
    asteroid.x = app.view.width - 600;
    asteroid.y = app.view.height - 700;
    asteroid.speed = asteroidSpeed;
    app.stage.addChild(asteroid);

    return asteroid;
};


// This function draws an asteroid on the right side of the screens width
function asteroidPhaseOne() {
    asteroid = PIXI.Sprite.from(app.loader.resources.asteroid.texture);
    asteroid.anchor.set(0.5);
    asteroid.x = app.view.width - 200;
    asteroid.y = app.view.height - 700;
    asteroid.speed = asteroidSpeed;
    app.stage.addChild(asteroid);

    return asteroid;
};

// This function draws an asteroid on the left side of the screens width
function asteroidPhaseTwo() {
    asteroid = PIXI.Sprite.from(app.loader.resources.asteroid.texture);
    asteroid.anchor.set(0.5);
    asteroid.x = app.view.width - 400;
    asteroid.y = app.view.height - 700;
    asteroid.speed = asteroidSpeed;
    app.stage.addChild(asteroid);

    return asteroid;
};

// This function draws an enemy sprite in the centre of the screens width
function drawPlayer() {
    ship = PIXI.Sprite.from(app.loader.resources.ship.texture);
    ship.anchor.set(0.5);
    ship.x = app.view.width / 2;
    ship.y = app.view.height / 1.1;

    return ship;
};

// This function allows the developer to draw an enemy on a designation location onscreen
// by passing the appropriate position variable into the () when calling the function
function drawEnemy(xScale=3, setZeroPhase=false) {
    enemy = PIXI.Sprite.from(app.loader.resources["enemy"].texture);
    enemy.anchor.set(0.5);
    enemy.x = app.view.width / xScale;
    enemy.y = app.view.height - 800;
    if (setZeroPhase == true) {
        enemy.phase = 0;
    }
    app.stage.addChild(enemy);
    return enemy;
};

// This function updates the positions of tiling in the parallaxing background
// This is what gives motion to the background and makes us feel like we are flying through space
function updateBackground(delta) {
    backgroundX = (backgroundX + backgroundSpeed);
    backgroundFront.tilePosition.y = backgroundX;
    backgroundMiddle.tilePosition.y = backgroundX / 2;
    backgroundBack.tilePosition.y = backgroundX / 4;
};
