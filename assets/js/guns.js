/* ------------------------------------- Enemy bullets ------------------------------------- */

// Shoots enemy bullets
function enemyFireBullet() {
    let enemyBullet = createEnemyBullet();
    enemyBullets.push(enemyBullet);
};

// Creates the enemies bullets

function createEnemyBullet() {
    let enemyBullet = PIXI.Sprite.from(app.loader.resources.enemyBullet.texture);
    enemyBullet.anchor.set(0.5);
    enemyBullet.x = enemy.x;
    enemyBullet.y = enemy.y + 14;
    enemyBullet.speed = enemyBulletSpeed;
    app.stage.addChild(enemyBullet);

    return enemyBullet;
};

// Increments enemyBullets array by pushing enemyBullet. sets up a way to delete array entries
function updateEnemyBullets(delta) {
    for (let i = 0; i < enemyBullets.length; i++) {
        enemyBullets[i].position.y += enemyBullets[i].speed;

        if (enemyBullets[i].position.y < 1) {
            enemyBullets[i].dead = true;
        }
    }

    // Removes enemyBullets from array when enemyBullet position is offscreen
    for (let i = 0; i < enemyBullets.length; i++) {
        enemyBullets[i].position.y += enemyBullets[i].speed;

        if (enemyBullets[i].dead) {
            app.stage.removeChild(enemyBullets[i]);
            enemyBullets.splice(i, 1);
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

/* ------------------------------------- Player Bullets ------------------------------------- */
var deltaTotalSinceLastBulletRequested = 0;
var coolDownBetweenBulletRequested = 1;

var deltaTotalSinceLastBulletFired = 0;
var coolDownBetweenBulletFired = 12;

var bulletRequested = false;

// This function pushes the bullet to the bullets array
function fireBullet(delta) {
    if (bulletRequested < 1)
        return;

    if (deltaTotalSinceLastBulletFired > coolDownBetweenBulletFired) {
        bulletRequested = false;
        bullet = createBullet();
        bullets.push(bullet);
        deltaTotalSinceLastBulletFired = 0;
    } else
        deltaTotalSinceLastBulletFired += delta;
};

function requestBullet(delta) {
    bulletRequested = true;
}

// Creates the Players bullet
function createBullet() {
    bullet = PIXI.Sprite.from(app.loader.resources.bullet.texture);
    bullet.anchor.set(0.5);
    bullet.x = ship.x;
    bullet.y = ship.y - 28;
    bullet.dy = bullet.y + 15;
    bullet.speed = bulletspeed;
    app.stage.addChild(bullet);

    return bullet;
};


// Allows us to loop the bullets array in order to update the position of each bullet
function updateBullets(delta) {

    fireBullet(delta);

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].position.y -= bullets[i].speed + 6;

        if (bullets[i].position.y < 0) {
            bullets[i].dead = true;
        }
    }

    // Removes bullets from array when bullet position is offscreen
    for (let i = 0; i < bullets.length; i++) {
        // if bullets in index is dead, remove it
        if (bullets[i].dead) {
            app.stage.removeChild(bullets[i]);
            bullets.splice(i, 1);
        }
    }
    // Loops backwards through the bullets array to allow us to remove the first entry into the array
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

        // check if bullets[] hits enemy, then increments the score
        if (checkPlayerCollision(bullets[i], enemy)) {
            //gameOver();
            //endGame();
            bullets[i].dead = true;
            app.stage.removeChild(enemy);
            enemy.dead = true;
            score = score += pointsEnemy;
            scoreText.text = "Score: " + score;
        }

        // check if bullets[] hits asteroid, then asteroid "blocks the bullets"
        if (checkPlayerCollision(bullets[i], asteroid)) {
            //gameOver();
            //endGame();
            bullets[i].dead = true;

        }
    }
};