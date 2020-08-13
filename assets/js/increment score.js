

function displayScore() {

    scoreText = new PIXI.Text("Score: " + score);
    scoreText.anchor.set(0);
    scoreText.x = app.view.width - 790;
    scoreText.y = app.view.height - 590;
    scoreText.visible = true;
    scoreText.style = new PIXI.TextStyle({
        fill: 0xffFFFF,
        fontSize: 14,
        fontFamily: "Lucida Console",
        fontStyle: "normal",
        strokeThickness: 0
    })

    // change score numbers based on actual points scored
/*
    if (score < 10) {
        score = "000" + score;
    } else null;

    if (score < 100) {
        score = "00" + score;
    } else null;

    if (score < 1000) {
        score = "0" + score;
    } else null;
 */


}

// 
function incrementScore() {

    if (checkPlayerCollision(ship, enemy)) {
        score = score + pointsEnemy;
    }
    
};