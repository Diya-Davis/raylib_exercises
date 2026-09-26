const r = require("raylib");

const windowWidth = 300;
const windowHeight = 200;

const blueRange1X = 100;
const blueRange1Y = 0;
const blueRange1Size = 50;

const blueRange2X = 200;
const blueRange2Y = 0;
const blueRange2Size = 5;

const blueRange3X = 0;
const blueRange3Y = 50;
const blueRange3Size = 20;

let scannerX = 0;
let scannerY = 0;

let scannerSize = 20;

let scannerX1 = windowWidth / 2;
let scannerY1 = 0;

let scannerX2 = 0;
let scannerY2 = 0;

let speed = 1;
let speed1 = 5;
let speed2 = 1;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Particle Scanner");
    r.SetTargetFPS(60);
}

function getScannerColorX(scannerXCoord) {
    const touchingRange1 = scannerXCoord + scannerSize >= blueRange1X && scannerXCoord <= blueRange1X + blueRange1Size;
    const touchingRange2 = scannerXCoord + scannerSize >= blueRange2X && scannerXCoord <= blueRange2X + blueRange2Size;
    if (touchingRange1 || touchingRange2) return r.Fade(r.RED, 0.7);
    return r.WHITE;
}
function getScannerColorY(scannerYCoord) {
    const touchingRange3 = scannerYCoord + scannerSize >= blueRange3Y && scannerYCoord <= blueRange3Y + blueRange3Size;
    if (touchingRange3) return r.Fade(r.RED, 0.7);
    return r.WHITE;
}
function draw() {

    let scannerColor = getScannerColorX(scannerX);
    let scannerColor1 = getScannerColorX(scannerX1);
    let scannerColor2 = getScannerColorY(scannerY2);

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(blueRange1X, blueRange1Y, blueRange1Size, windowHeight, r.BLUE);
    r.DrawRectangle(blueRange2X, blueRange2Y, blueRange2Size, windowHeight, r.BLUE);
    r.DrawRectangle(blueRange3X, blueRange3Y, windowWidth, blueRange3Size, r.BLUE);

    r.DrawRectangle(scannerX, scannerY, scannerSize, windowHeight, scannerColor);
    r.DrawRectangle(scannerX1, scannerY1, scannerSize, windowHeight, scannerColor1);
    r.DrawRectangle(scannerX2, scannerY2, windowWidth, scannerSize, scannerColor2);

    r.EndDrawing();

}

function update() {

    if (scannerX + scannerSize >= windowWidth / 2 || scannerX < 0) {
        speed = -speed;

    }
    if (scannerX1 + scannerSize > windowWidth || scannerX1 < windowWidth / 2) {
        speed1 = -speed1;
    }
    if (scannerY2 + scannerSize >= windowHeight || scannerY2 < 0) {
        speed2 = -speed2;

    }
    scannerX = scannerX + speed;
    scannerX1 = scannerX1 + speed1;
    scannerY2 = scannerY2 + speed2;

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