const r = require("raylib");
const windowWidth = 300;
const windowHeight = 200;
let scannerX = 0;
let scannerY = 0;
let scannerSize = 20;
const blueRangeX = 100;
const blueRangeY = 0;
const blueRangeSize = 50;
let speed = 1;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Particle Scanner");
    r.SetTargetFPS(60);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(scannerX, scannerY, scannerSize, windowHeight, r.WHITE);
    r.DrawRectangle(blueRangeX, blueRangeY, blueRangeSize, windowHeight, r.BLUE);
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

module.exports = {
    setup,
    running,
    draw,
    update,
};