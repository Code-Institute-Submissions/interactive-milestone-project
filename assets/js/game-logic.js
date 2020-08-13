function initLevel() {
    startGame.visible = false;
    titleText.visible = false;
    app.stage.addChild(ship);
    app.stage.addChild(enemy);
    app.stage.addChild(asteroid);

}

function createBackground(texture) {
    let tiling = new PIXI.TilingSprite(texture, 800, 600);
    tiling.position.set(0,0);
    app.stage.addChild(tiling);

    return tiling;
}

function drawPlayer() {
    // Create and Stage player on the Canvas //
    ship = PIXI.Sprite.from(app.loader.resources.ship.texture);
    ship.anchor.set(0.5);
    ship.x = app.view.width / 2;
    ship.y = app.view.height / 1.1;
};

// Create and Stage player on the Canvas
function drawEnemy() {
    enemy = PIXI.Sprite.from(app.loader.resources.enemy.texture);
    enemy.anchor.set(0.5);
    enemy.x = app.view.width / 2;
    enemy.y = app.view.height / 7;
};

// Setup Main Menu/Start Screen
function startScreen() {
    startGame = new PIXI.Text("Press ENTER to start");
    startGame.anchor.set(0.5);
    startGame.x = app.view.width / 2;
    startGame.y = app.view.height / 1.8;
    startGame.visible = true;
    startGame.style = new PIXI.TextStyle({
        fill: 0xffffff,
        fontSize: 20,
        fontFamily: "Lucida Console",
        fontStyle: "normal",
        strokeThickness: 3
    })
    app.stage.addChild(startGame);
};
    
// Setup Title Text //
function gameName() {
    titleText = new PIXI.Text("INERTIA OVERRIDE");
    titleText.anchor.set(0.5);
    titleText.x = app.view.width / 2;
    titleText.y = app.view.height / 2.2;
    titleText.visible = true;
    titleText.style = new PIXI.TextStyle({
        fill: 0x00FFFF,
        fontSize: 50,
        fontFamily: "Exo 2",
        fontStyle: "bold",
        strokeThickness: 3
    })
    app.stage.addChild(titleText);
};        

// setup Game Over text //
function gameOver() {
    gameOverText = new PIXI.Text("GAME OVER");
    gameOverText.anchor.set(0.5);
    gameOverText.x = app.view.width / 2;
    gameOverText.y = app.view.height / 2;
    gameOverText.visible = true;
    gameOverText.style = new PIXI.TextStyle({
        fill: 0x8b0000,
        fontSize: 30,
        fontFamily: "Cairo",
        fontStyle: "bold"
    })
    app.stage.addChild(gameOverText);
};

// Controls: Press Enter to Start Game //
function switchContainer(e) {
    if (keys["13"]) {
        titleScreen.visible = false;
        mainScreen.visible = true;
        endScreen.visible = false;
        initLevel();
                
    }

    if (keys["49"]) {
        gameOver();
        endGame();
    }

};

function keyDown(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = true;
};

function keyUp(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = false;
};

function updateBackground() {
    backgroundX = (backgroundX + backgroundSpeed);
    backgroundFront.tilePosition.y = backgroundX;
    backgroundMiddle.tilePosition.y = backgroundX / 2;
    backgroundBack.tilePosition.y = backgroundX / 4;
};

// check if player collides with enemy //
function checkPlayerCollisionWithEnemy() {

    if (ship.position.y == enemy.position.y &&
        ship.position.x == enemy.position.x) {
        endGame();
        gameOver();
    }
};

// sends to game over screen //
function endGame() {
    {
        app.stage.removeChild(ship);
        app.stage.removeChild(enemy);
        app.stage.removeChild(asteroid);
        app.stage.addChild(gameOverText);
    }
};

// The Game Loop //
function gameLoop(delta) {

    updateBackground(delta);
    updateBullets();
    updateEnemyBullets(delta);
    updateAsteroids();
    
    // Ship Controls //
    
    // A //
    if (keys["65"]) {
        ship.x -= 5;
    }
    // D //
    if (keys["68"]) {
        ship.x += 5;
    }
    // <- //
    if (keys["37"]) {
        ship.x -= 5;
    }
    // -> //
    if (keys["39"]) {
        ship.x += 5;
    }
    // ^ //
    if (keys["38"]) {
        ship.y -= 5;
    }
    // downArrow //
    if (keys["40"]) {
        ship.y += 5;
    }
    // W //
    if (keys["87"]) {
        ship.y -= 5;
    }
    // S //
    if (keys["83"]) {
        ship.y += 5;
    }
    // spacebar //
    if (keys["32"]) {
        fireBullet();
    }
    // Press q to fire enemy bullets //
    if (keys["81"]) {
        enemyFireBullet();
    }
    // press c
    if (keys["67"]) {
        fireAsteroid();
    }
    


};