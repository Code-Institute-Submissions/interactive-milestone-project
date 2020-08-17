// This document contains the bulk of the logic for how various aspects of the game will work
// which consists of mostly functions, inclusive in the gameLoop function.

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

function createBackground(texture) {
    let tiling = new PIXI.TilingSprite(texture, 800, 600);
    tiling.position.set(0,0);
    app.stage.addChild(tiling);

    return tiling;
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
function asteroidPhase1() {
    asteroid = PIXI.Sprite.from(app.loader.resources.asteroid.texture);
    asteroid.anchor.set(0.5);
    asteroid.x = app.view.width - 200;
    asteroid.y = app.view.height - 700;
    asteroid.speed = asteroidSpeed;
    app.stage.addChild(asteroid);

    return asteroid; 
};

// This function draws an asteroid on the left side of the screens width
function asteroidPhase2() {
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

// This function draws an enemy sprite on the left side of the screens width
function drawEnemy() {
    enemy = PIXI.Sprite.from(app.loader.resources["enemy"].texture);
    enemy.anchor.set(0.5);
    enemy.x = app.view.width / 3;
    enemy.y = app.view.height - 800;
    app.stage.addChild(enemy);
    return enemy;
};

// This function draws an enemy sprite on the right side of the screens width
function drawEnemy2() {
    enemy = PIXI.Sprite.from(app.loader.resources["enemy"].texture);
    enemy.anchor.set(0.5);
    enemy.x = app.view.width / 1.5;
    enemy.y = app.view.height - 800;
    enemy.phase = 0;
    app.stage.addChild(enemy);
    return enemy;
}

// This function updates aspects like sprite position in delta time, in connection with gameLoop
function updateLevel(delta) {
/*  // update enemy movement

    // This moves the enemy ship in an elliptical shape pattern
    enemy.position.x = 160 + 100 * Math.cos(enemy.phase);
    enemy.position.y = 120 + 60 * Math.sin(enemy.phase);
    // This tints the enemy sprite red
    enemy.tint = 0xff000f; red */

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
    console.log(e.keyCode);
    keys[e.keyCode] = true;
};
// Checks if a user stops holding a key down on the keyboard
function keyUp(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = false;
};

// This function updates the positions of tiling in the parallaxing background
// This is what gives motion to the background and makes us feel like we are flying through space
function updateBackground() {
    backgroundX = (backgroundX + backgroundSpeed);
    backgroundFront.tilePosition.y = backgroundX;
    backgroundMiddle.tilePosition.y = backgroundX / 2;
    backgroundBack.tilePosition.y = backgroundX / 4;
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
function spawner1() {
    // update enemy spawning
    if (enemy.x == app.view.width / 3) {
        if (enemy.y > app.view.height + 15) {
            drawEnemy2();
        }
    };
    if (enemy.x == app.view.width / 1.5) {
        if (enemy.y > app.view.height + 15) {
            drawEnemy();
        }
    };
}

// This function spawns asteroids in a loop once each asteroid reaches beyond the bottom of the screen
function asteroidSpawner1() {
    // update asteroid spawning
    // when asteroid on the left of screen goes off screen
    if (asteroid.x == app.view.width - 600) {
        if (asteroid.y > app.view.height + 20) {
            asteroidPhase1();
        }
    };
    // when asteroid on the right of screen goes off screen
    if (asteroid.x == app.view.width - 200) {
        if (asteroid.y == app.view.height + 20) {
            asteroidPhase2();
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
    updateBullets();
    // update the position of the bullets in the enemyBullets array
    updateEnemyBullets(delta);
    // Updates Movement of enemy and asteroid sprites in delta time
    updateLevel(delta);
    // Constantly checks if the player collides with the sides of the screen. and stops player from exiting
    checkScreenBounds(delta);

    // This spawns enemies on a loop
    spawner1();

    // This spawns asteroids on a loop
    asteroidSpawner1();

    // Check if Player collides with the Enemy
    if (checkPlayerCollision(ship, enemy)) {
       // gameOver();
        //endGame();
        ship.tint = 0x00ff00; //green
        enemy.tint = 0x00ff00; //green
    }

    // Check if Player collision with an Asteroid
    if (checkPlayerCollision(ship, asteroid)) {
       ship.tint = 0x00ff00; //green
       enemy.tint = 0x00ff00; //green
    }
    


    // Ship Controls
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
        fireBullet();
        inputFire = true;
    }
    // press c to push enemies into the enemies array
    if (keys["67"]) {
       // fireEnemiesVertical();
       
    }
    // Press q to fire enemy bullets
    if (keys["81"]) {
         enemyFireBullet();
    } 

};