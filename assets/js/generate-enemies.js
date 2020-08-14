
// Create and Stage enemy on the Canvas
function drawEnemy() {
    enemy = PIXI.Sprite.from(app.loader.resources["enemy"].texture);
    enemy.anchor.set(0.5);
    enemy.x = app.view.width / 2.5;
    enemy.y = app.view.height - 800;
    enemy.phase = 0;

    return enemy;
};

