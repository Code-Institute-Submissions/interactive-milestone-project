

// shoot enemy bullets //
function enemyFireBullet() {
        let enemyBullet = createEnemyBullet();
        enemyBullets.push(enemyBullet);    
};

// Creates the enemies bullets, assigns values and adds to game window //

function createEnemyBullet() {
    let enemyBullet = PIXI.Sprite.from(app.loader.resources.enemyBullet.texture);
    enemyBullet.anchor.set(0.5);
    enemyBullet.x = enemy.x;
    enemyBullet.y = enemy.y + 14;
    enemyBullet.speed = enemyBulletSpeed;
    app.stage.addChild(enemyBullet);

    return enemyBullet; 
};

// Increments enemyBullets array by pushing enemyBullet. sets up a way to delete array entries //
function updateEnemyBullets(delta) {
    for (let i = 0; i < enemyBullets.length; i++) {
         enemyBullets[i].position.y += enemyBullets[i].speed;

         if (enemyBullets[i].position.y < 1) {
             enemyBullets[i].dead = true;
         }
    }

    // removes enemyBullets from array when enemyBullet position is offscreen. //
    for (let i = 0; i < enemyBullets.length; i++) {
        enemyBullets[i].position.y += enemyBullets[i].speed;

        if (enemyBullets[i].dead) {
            app.stage.removeChild(enemyBullets[i]);
            enemyBullets.splice(i,1);
        }
    
        // check if bullets[] hits enemy, then turn enemy red
        if (checkPlayerCollision(enemyBullets[i], ship)) {
            // gameOver();
            //endGame();
            enemyBullets[i].dead = true;
            ship.tint = 0xff000f; //red
     
        }

        // check if bullets[] hits asteroid, then tint asteroid red
        if (checkPlayerCollision(enemyBullets[i], ship)) {
        // gameOver();
        //endGame();
            enemyBullets[i].dead = true;
            ship.tint = 0xff000f; //red
     
        }
    }
};





// shoot bullets //
function fireBullet() {
    bullet = createBullet();
    bullets.push(bullet);


 
    
};

// Creates the players bullets, assigns values and adds to game window //
function createBullet() {
    bullet = PIXI.Sprite.from(app.loader.resources.bullet.texture);
    bullet.anchor.set(0.5);
    bullet.x = ship.x;
    bullet.y = ship.y - 28;
    bullet.speed = bulletspeed;
    app.stage.addChild(bullet);    

    return bullet;
};


// Increments bullets array by pushing bullet. sets up a way to delete array entries //
function updateBullets(delta) { 
    for (let i = 0; i < bullets.length; i++) {
         bullets[i].position.y -= bullets[i].speed + 6;

         if (bullets[i].position.y < 0) {
             bullets[i].dead = true;
         }
    }

    // removes bullets from array when bullet position is offscreen. //
    for (let i = 0; i < bullets.length; i++) {
        // if bullets in index is dead, remove it
        if (bullets[i].dead) {
            app.stage.removeChild(bullets[i]);
            bullets.splice(i,1);
        }
    }
    // decrement bullets array if i is equal to "0 in length" //
    for (let i = bullets.length - 1; i >= 0; i--) {
        // if bullets in index is dead, remove it
        if (bullets[i].dead) {
            app.stage.removeChild(bullets[i]);
            bullets.splice(i, 1);
        }
    }


    for (let i = 0; i < bullets.length; i++) {
         bullets[i].position.y -= bullets[i].speed;

        if (bullets[i].dead) {
            app.stage.removeChild(bullets[i]);
            bullets.splice(i);
        }

        // check if bullets[] hits enemy, then turn enemy red
        if (checkPlayerCollision(bullets[i], enemy)) {
           //gameOver();
           //endGame();
             bullets[i].dead = true;
             enemy.tint = 0xff000f;
     
         }

         // check if bullets[] hits asteroid, then tint asteroid red
         if (checkPlayerCollision(bullets[i], asteroid)) {
             //gameOver();
             //endGame();
             bullets[i].dead = true;
             asteroid.tint = 0xff000f; //red
     
         }
    }
};