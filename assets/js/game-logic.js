
function initLevel() {
    startGame.visible = false;
    titleText.visible = false;
    mainScreen.visible = true;
    app.stage.addChild(ship);
    app.stage.addChild(enemy);
    app.stage.addChild(asteroid);
    displayScore();

};

function createBackground(texture) {
    let tiling = new PIXI.TilingSprite(texture, 800, 600);
    tiling.position.set(0,0);
    app.stage.addChild(tiling);

    return tiling;
};

// function to check if 2 variables collide
function checkPlayerCollision(a, b) {
    let boundBoxA = a.getBounds();
    let boundBoxB = b.getBounds();

    return boundBoxA.x + boundBoxA.width > boundBoxB.x &&
           boundBoxA.x < boundBoxB.x + boundBoxB.width &&

           boundBoxA.y + boundBoxA.height > boundBoxB.y &&
           boundBoxA.y < boundBoxB.y + boundBoxB.height;
};

function asteroidPhase() {
    asteroid = PIXI.Sprite.from(app.loader.resources.asteroid.texture);
    asteroid.anchor.set(0.5);
    asteroid.x = app.view.width - 600;
    asteroid.y = app.view.height - 700;
    asteroid.speed = asteroidSpeed;
    app.stage.addChild(asteroid);

    return asteroid; 
};

function asteroidPhase1() {
    asteroid = PIXI.Sprite.from(app.loader.resources.asteroid.texture);
    asteroid.anchor.set(0.5);
    asteroid.x = app.view.width - 200;
    asteroid.y = app.view.height - 700;
    asteroid.speed = asteroidSpeed;
    app.stage.addChild(asteroid);

    return asteroid; 
};

function asteroidPhase2() {
    asteroid = PIXI.Sprite.from(app.loader.resources.asteroid.texture);
    asteroid.anchor.set(0.5);
    asteroid.x = app.view.width - 400;
    asteroid.y = app.view.height - 700;
    asteroid.speed = asteroidSpeed;
    app.stage.addChild(asteroid);

    return asteroid; 
};

function drawPlayer() {
    // Create and Stage player on the Canvas
    ship = PIXI.Sprite.from(app.loader.resources.ship.texture);
    ship.anchor.set(0.5);
    ship.x = app.view.width / 2;
    ship.y = app.view.height / 1.1;
    
    return ship;
};

function drawEnemy() {
    enemy = PIXI.Sprite.from(app.loader.resources["enemy"].texture);
    enemy.anchor.set(0.5);
    enemy.x = app.view.width / 3;
    enemy.y = app.view.height - 800;
    app.stage.addChild(enemy);
    return enemy;
};

function drawEnemy2() {
    enemy = PIXI.Sprite.from(app.loader.resources["enemy"].texture);
    enemy.anchor.set(0.5);
    enemy.x = app.view.width / 1.5;
    enemy.y = app.view.height - 800;
    enemy.phase = 0;
    app.stage.addChild(enemy);
    return enemy;
}


    function updateLevel(delta) {
        //enemy movement
     /*   enemy.phase += delta * 0.05;
        enemy.position.x = 160 + 100 * Math.cos(enemy.phase);
        enemy.position.y = 120 + 60 * Math.sin(enemy.phase);
      //enemy.tint = 0xff000f; red */

        if (titleText.visible == false) {
            app.stage.addChild(scoreText);
            asteroid.y += 2.5;
            asteroid.rotation += delta * 0.01;
            enemy.y += 2;
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

// setup Game Over text //
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

function keyDown(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = true;
};

function keyUp(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = false;
};

// update positions of tiling in the parallaxing background
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

// move asteroid towards the player



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

function asteroidSpawner1() {
    // update asteroid spawning
    if (asteroid.x == app.view.width - 600) {
        if (asteroid.y > app.view.height + 20) {
            asteroidPhase1();
        }
    };
    if (asteroid.x == app.view.width - 200) {
        if (asteroid.y == app.view.height + 20) {
            asteroidPhase2();
        }
    };
    if (asteroid.x == app.view.width - 400) {
        if (asteroid.y == app.view.height + 20) {
            asteroidPhase();
        }
    };
};

// The Game Loop //
function gameLoop(delta) {

    updateBackground(delta);
    updateBullets();
    updateEnemyBullets(delta);
    updateLevel(delta);
    checkScreenBounds(delta);

    spawner1();
    asteroidSpawner1();

    // update asteroid spawning

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
    
    //incrementScore();
    displayScore(delta);
    scoreText.visible = true;
    
    

    // Ship Controls //
    
    // A is left
    if (keys["65"]) {
        ship.x -= 5;
    }
    // D is right
    if (keys["68"]) {
        ship.x += 5;
    }
    // <- is left
    if (keys["37"]) {
        ship.x -= 5;
    }
    // -> is right
    if (keys["39"]) {
        ship.x += 5;
    }
    // ^ is up
    if (keys["38"]) {
        ship.y -= 5;
    }
    // downArrow is down
    if (keys["40"]) {
        ship.y += 5;
    }
    // W is up
    if (keys["87"]) {
        ship.y -= 5;
    }
    // S is down
    if (keys["83"]) {
        ship.y += 5;
    }
    // spacebar fires lasers
    if (keys["32"]) {
        fireBullet();
        inputFire = true;
    }
    // press c
    if (keys["67"]) {
       // fireEnemiesVertical();
       
    }
    // Press q to fire enemy bullets //
    if (keys["81"]) {
         enemyFireBullet();
    } 


};