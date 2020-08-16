

// METHOD ARRAYS
// Create and Stage enemy on the Canvas
/*
function drawEnemy() {
    let enemy = PIXI.Sprite.from(app.loader.resources["enemy"].texture);
    enemy.anchor.set(0.5);
    enemy.x = app.view.width / 2;
    enemy.y = app.view.height - 600;
    enemy.speed = enemySpeed;

    return enemy;
};

// shoot bullets //
function fireEnemiesVertical() {
    setInterval(() => {
    enemy = drawEnemy();
    enemiesVertical.push(enemy);
    }, 1000);

};

function updateEnemiesVertical(delta) { 
            for (let b = 0; b < enemiesVertical.length; b++) {
         enemiesVertical[b].position.y += enemiesVertical[b].speed;
          app.stage.addChild(enemy);

        if (enemiesVertical[b].position.y < 0) {
            enemiesVertical[b].dead = true;
         }
    }

    // removes bullets from array when bullet position is offscreen. //
    for (let b = 0; b < enemiesVertical.length; b++) {
        // if bullets in index is dead, remove it
        if (enemiesVertical[b].dead) {
            app.stage.removeChild(enemy[b]);
            enemies.splice(b,1);
        }
    }
    // decrement bullets array if i is equal to "0 in length" //
    for (let b = enemiesVertical.length - 1; b >= 0; b--) {
        // if enemies in index is dead, remove it
        if (enemiesVertical[b].dead) {
            app.stage.removeChild(enemiesVertical[b]);
            enemiesVertical.splice(b, 1);
        }
    }


    for (let b = 0; b < enemiesVertical.length; b++) {
         enemiesVertical[b].position.y += enemiesVertical[b].speed;

        // check if bullets[] hits enemy, then turn enemy red
        if (checkPlayerCollision(enemiesVertical[b], ship)) {
           //gameOver();
           //endGame();
             enemiesVertical[b].dead = true;
             enemy.tint = 0xff000f;
     
         }

        if (enemiesVertical[b].dead) {
            app.stage.removeChild(enemiesVertical[b]);
            enemiesVertical.splice(b, 1);
        }


    }
};

*/

//METHOD MULTI FUNCTION
