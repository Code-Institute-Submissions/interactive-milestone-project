function asteroidPhase() {
    asteroid = PIXI.Sprite.from(app.loader.resources.asteroid.texture);
    asteroid.anchor.set(0.5);
    asteroid.x = app.view.width / 4;
    asteroid.y = app.view.height - 700;
    asteroid.speed = asteroidSpeed;
    

    return asteroid; 
}; 

function updateAsteroids() {
    for (let i = 0; 1 < comets.length; i++) {
        comets[i].position.y += comets[i].speed;
    }
}

function fireAsteroid() {
    let asteroid = asteroidPhase();
    comets.push(asteroid);
}