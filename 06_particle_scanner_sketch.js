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
let speed = 1;
let scannerColor = r.WHITE;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Particle Scanner");
    r.SetTargetFPS(60);
}
function getScannerColor() {
    const touchingScanner1 = scannerX + scannerSize >= blueRange1X && scannerX <= blueRange1X + blueRange1Size;
    const touchingScanner2 = scannerX + scannerSize >= blueRange2X && scannerX <= blueRange2X + blueRange2Size;
    if (touchingScanner1 || touchingScanner2) {
        return r.RED;
    }
    return r.WHITE;
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(blueRange1X, blueRange1Y, blueRange1Size, windowHeight, r.BLUE);
    r.DrawRectangle(blueRange2X, blueRange2Y, blueRange2Size, windowHeight, r.BLUE)
    scannerColor = getScannerColor();
    r.DrawRectangle(scannerX, scannerY, scannerSize, windowHeight, scannerColor);

    r.EndDrawing();
}
function update() {
    if (scannerX + scannerSize >= windowWidth || scannerX < 0) {
        speed = -speed;
    }
    scannerX = scannerX + speed;
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
};