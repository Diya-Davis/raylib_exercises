const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;
const widthOfRectangle1 = 200;
const heightOfRectangle1 = 100;
const widthOfRectangle2 = 50;
const heightOfRectangle2 = 20;

function calculatePosition(windowSize, rectanglesize) {
    return (windowSize - rectanglesize) / 2;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "calculatePosition");
    r.SetTargetFPS(60);
}
function running() {
    return !r.WindowShouldClose()
}
function draw() {
    r.BeginDrawing();
    const positionXOfRectangle1 = calculatePosition(
        windowWidth,
        widthOfRectangle1,
    );
    const positionYOfRectangle1 = calculatePosition(
        windowHeight,
        heightOfRectangle1,
    );
    r.DrawRectangle(
        positionXOfRectangle1,
        positionYOfRectangle1,
        widthOfRectangle1,
        heightOfRectangle1,
        r.RED,
    );
    const positionXOfRectangle2 =
        positionXOfRectangle1 +
        calculatePosition(widthOfRectangle1, widthOfRectangle2);
    const positionYOfRectangle2 =
        positionYOfRectangle1 +
        calculatePosition(heightOfRectangle1, heightOfRectangle2);
    r.DrawRectangle(
        positionXOfRectangle2,
        positionYOfRectangle2,
        widthOfRectangle2,
        heightOfRectangle2,
        r.WHITE,
    );
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}
module.exports = {
    setup,
    draw,
    running,
    teardown,
}
