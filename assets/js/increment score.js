

function displayScore() {

    scoreText = new PIXI.Text("Score: " + score);
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
    
};