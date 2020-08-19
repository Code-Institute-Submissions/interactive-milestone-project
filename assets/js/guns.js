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
            bullets[i].dead = true;
            app.stage.removeChild(enemy);
            enemy.dead = true;
            score = score += pointsEnemy;
            scoreText.text = "Score: " + score;
        }

        // check if bullets[] hits asteroid, then asteroid "blocks the bullets"
        if (checkPlayerCollision(bullets[i], asteroid)) {
            bullets[i].dead = true;

        }
    }
};