// This document contains the bulk of the logic for how various aspects of the game will work
// which consists of mostly functions, inclusive in the gameLoop function.

// Ship Controls
function updateShipControls(delta) {
    // A is move Player ship left
    if (keys["65"]) {
        ship.x -= 5;
    }
    // D is move Player ship right
    if (keys["68"]) {
        ship.x += 5;
    }
    // <- is move Player ship left
    if (keys["37"]) {
        ship.x -= 5;
    }
    // -> is move Player ship right
    if (keys["39"]) {
        ship.x += 5;
    }
    // ^ is move Player ship up
    if (keys["38"]) {
        ship.y -= 5;
    }
    // downArrow is move Player ship down
    if (keys["40"]) {
        ship.y += 5;
    }
    // W is move Player ship up
    if (keys["87"]) {
        ship.y -= 5;
    }
    // S is move Player ship down
    if (keys["83"]) {
        ship.y += 5;
    }
    // Spacebar fires Player ships lasers
    if (keys["32"]) {
        requestBullet(delta);
        inputFire = true;
    }
};

// This function when called removes the title text, adds our Player ship, an Enemy and an Asteroid to the screen
// as well as calls our function to display the Players score
function initLevel() {
    startGame.visible = false;
    titleText.visible = false;
    mainScreen.visible = true;
    app.stage.addChild(ship);
    app.stage.addChild(enemy);
    app.stage.addChild(asteroid);
    //incrementScore();
    displayScore();
    scoreText.visible = true;

};

// This function checks if two variables "a, b" collide with each other
function checkPlayerCollision(a, b) {
    let boundBoxA = a.getBounds();
    let boundBoxB = b.getBounds();

    return boundBoxA.x + boundBoxA.width > boundBoxB.x &&
        boundBoxA.x < boundBoxB.x + boundBoxB.width &&

        boundBoxA.y + boundBoxA.height > boundBoxB.y &&
        boundBoxA.y < boundBoxB.y + boundBoxB.height;
};

// This function updates aspects like sprite position in delta time, in connection with gameLoop
function updateLevel(delta) {
    // update enemy movement
    if (titleText.visible == false) {
        app.stage.addChild(scoreText);
        asteroid.y += 2.5;
        asteroid.rotation += delta * 0.01;
        enemy.y += 3;
    }

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

// Setup Game Over text
function gameOver() {
    gameOverText = new PIXI.Text("GAME OVER");
    gameOverText.anchor.set(0.5);
    gameOverText.x = app.view.width / 2;
    gameOverText.y = app.view.height / 2;
    gameOverText.visible = true;
    gameOverText.style = new PIXI.TextStyle({
        fill: 0x8b0000,
        fontSize: 50,
        fontFamily: "Cairo",
        fontStyle: "bold"
    })
    app.stage.addChild(gameOverText);
};

// Controls: Press Enter to Start Game
function switchContainer(e) {
    if (keys["13"]) {
        titleScreen.visible = false;
        mainScreen.visible = true;
        endScreen.visible = false;
        initLevel();

    }

    // Test if Game Over screen is working
    if (keys["49"]) {
        gameOver();
        endGame();
    }

};

// Checks if user presses or holds a key down on the keyboard
function keyDown(e) {
    //console.log(e.keyCode);
    keys[e.keyCode] = true;
};
// Checks if a user stops holding a key down on the keyboard
function keyUp(e) {
    //console.log(e.keyCode);
    keys[e.keyCode] = false;
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

// check to prevent player from leaving the screen || Note: issues getting top of screen collision working.
function checkScreenBounds(delta) {

    let screenHeight = app.view.height;
    let screenWidth = app.view.width;

    // bottom of screen || Note: Only seems to work as / 1.1
    if (ship.y == screenHeight / 1.1) {
        ship.y -= 5;
    };
    //top of screen || Note: Does not work at all
    if (ship.y == screenHeight - 25) {
        ship.y += 5;
    };
    //left side of screen
    if (ship.x == screenWidth - 775) {
        ship.x += 5;
    };
    //right side of screen
    if (ship.x == screenWidth - 25) {
        ship.x -= 5;
    };
};

// This function spawns enemies in a loop once each enemy reaches beyond the bottom of the screen
function enemySpawner() {
    // update enemy spawning
    if (enemy.x == app.view.width / 3) {
        if (enemy.y > app.view.height + 15) {
            drawEnemy(1.5, true);
        }
    };
    if (enemy.x == app.view.width / 1.5) {
        if (enemy.y > app.view.height + 15) {
            drawEnemy();
        }
    };
}

// This function spawns asteroids in a loop once each asteroid reaches beyond the bottom of the screen
function asteroidSpawner() {
    // update asteroid spawning
    // when asteroid on the left of screen goes off screen
    if (asteroid.x == app.view.width - 600) {
        if (asteroid.y > app.view.height + 20) {
            asteroidPhaseOne();
        }
    };
    // when asteroid on the right of screen goes off screen
    if (asteroid.x == app.view.width - 200) {
        if (asteroid.y == app.view.height + 20) {
            asteroidPhaseTwo();
        }
    };
    // when asteroid in center of screen goes off screen
    if (asteroid.x == app.view.width - 400) {
        if (asteroid.y == app.view.height + 20) {
            asteroidPhase();
        }
    };
};

// The Game Loop
function gameLoop(delta) {

    // update the position of background tiling
    updateBackground(delta);
    // update the position of the bullets in the bullets array
    updateBulletsAndCheckCollision(delta);
    // Updates Movement of enemy and asteroid sprites in delta time
    updateLevel(delta);
    // Constantly checks if the player collides with the sides of the screen. and stops player from exiting
    checkScreenBounds(delta);

    // This spawns enemies on a loop
    enemySpawner();

    // This spawns asteroids on a loop
    asteroidSpawner();

    // Check if Player collides with the Enemy
    if (checkPlayerCollision(ship, enemy)) {
        gameOver();
        endGame();
    }

    // Check if Player collision with an Asteroid
    if (checkPlayerCollision(ship, asteroid)) {
        gameOver();
        endGame();
    }

    // This allows the player to control the ship in game
    updateShipControls();

};