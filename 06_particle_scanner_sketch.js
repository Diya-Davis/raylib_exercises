const r = require("raylib");
const windowWidth = 300;
const windowHeight = 200;
let scannerX = 0;
let scannerY = 0;
let scannerSize = 20;
const blueRange1X = 100;
const blueRange1Y = 0;
const blueRange1Size = 50;
const blueRange2X = 200;
const blueRange2Y = 0;
const blueRange2Size = 5;
let speed = 2;
let speed1 = -1;
let scannerX1 = windowWidth - scannerSize;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Particle Scanner");
    r.SetTargetFPS(60);
}

function getScannerColor(scannerXCoord) {
    const touchingRange1 = scannerXCoord + scannerSize >= blueRange1X && scannerXCoord <= blueRange1X + blueRange1Size;
    const touchingRange2 = scannerXCoord + scannerSize >= blueRange2X && scannerXCoord <= blueRange2X + blueRange2Size;
    if (touchingRange1 || touchingRange2) {
        return r.RED;
    }
    return r.WHITE;
}

function draw() {
    let scannerColor;
    let scannerColor1;
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(blueRange1X, blueRange1Y, blueRange1Size, windowHeight, r.BLUE);
    r.DrawRectangle(blueRange2X, blueRange2Y, blueRange2Size, windowHeight, r.BLUE)
    scannerColor = getScannerColor(scannerX);
    scannerColor1 = getScannerColor(scannerX1);
    r.DrawRectangle(scannerX, scannerY, scannerSize, windowHeight, scannerColor);
    r.DrawRectangle(scannerX1, scannerY, scannerSize, windowHeight, scannerColor1);
    r.EndDrawing();
}

function update() {

    if (scannerX + scannerSize >= windowWidth / 2 || scannerX < 0) {
        speed = -speed;

    }
    if (scannerX1 <= windowWidth / 2 || scannerX1 + scannerSize > windowWidth) {
        speed1 = -speed1;
    }
    scannerX = scannerX + speed;
    scannerX1 = scannerX1 + speed1;

}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    running,
    draw,
    update,
    teardown,
};