const r = require("raylib");
const windowHeight = 800;
const windowWidth = 800;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Intersecting circles");
    r.SetTargetFPS(10);
}
function distanceBetween2Points(p1x, p1y, p2x, p2y) {
    return ((p1x - p2x) ** 2 + (p1y - p2y) ** 2) ** 0.5;
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    const circle1X = 100;
    const circle1Y = 100;
    const circle1Radius = 50;
    const circle2X = 180;
    const circle2Y = 180;
    const circle2Radius = 80;
    const distance = distanceBetween2Points(circle1X, circle1Y, circle2X, circle2Y);
    const overlapping = distance <= (circle1Radius + circle2Radius);
    let color = overlapping ? r.RED : r.BLACK;
    r.DrawCircle(circle1X, circle1Y, circle1Radius, color);
    r.DrawCircle(circle2X, circle2Y, circle2Radius, color);
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();