
// function to check if 2 variable collide
function checkPlayerCollision(a, b) {
    let boundBoxA = a.getBounds();
    let boundBoxB = b.getBounds();

    return boundBoxA.x + boundBoxA.width > boundBoxB.x &&
           boundBoxA.x < boundBoxA.x + boundBoxB.width &&
           boundBoxA.y + boundBoxA.height > boundBoxB.y &&
           boundBoxA.y < boundBoxB.y + boundBoxB.height;
};