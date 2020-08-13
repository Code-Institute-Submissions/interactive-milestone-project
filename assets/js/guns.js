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
   }
    
};



// shoot bullets //
function fireBullet() {
    let bullet = createBullet();
    bullets.push(bullet);
    
};

// Creates the players bullets, assigns values and adds to game window //
function createBullet() {
    let bullet = PIXI.Sprite.from(app.loader.resources.bullet.texture);
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
         bullets[i].position.y -= bullets[i].speed;

         if (bullets[i].position.y < 0) {
             bullets[i].dead = true;
         }
         
}

    // removes bullets from array when bullet position is offscreen. //
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].position.y -= bullets[i].speed;

        if (bullets[i].dead) {
            app.stage.removeChild(bullets[i]);
            bullets.splice(i,1);
        }
   }
   // Limit Ammo if array is equal to "0 in length" //
   for (let i = 0; i < bullets.length; i++) {
    bullets[i].position.y -= bullets[i].speed;

    if (bullets[i].length > -1) {
        app.stage.removeChild(bullets[i]);
        bullets.splice(i,1);
        setTimeout(() => {
            updateBullets();
        }, 500);
    }
}
    
};