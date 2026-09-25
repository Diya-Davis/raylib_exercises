const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;
const widthOfRectangle1 = 200;
const heightOfRectangle1 = 100;

function calculatePosition(windowSize, rectanglesize) {
    return (windowSize - rectanglesize) / 2;
}
r.InitWindow(windowWidth, windowHeight, "calculatePosition");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
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

    r.EndDrawing();
}
