const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const widthRatioOfRectangle1 = 0.5;
const heightRatioOfRectangle1 = 0.5;
const widthRatioOfRectangle2 = 0.5;
const heightRatioOfRectangle2 = 0.5;

function calculatePosition(windowSize, rectanglesize) {
    return (windowSize - rectanglesize) / 2;
}

function calculateSize(ratioOfInnerRectangle, sizeOfWindow) {
    return ratioOfInnerRectangle * sizeOfWindow;
}

r.InitWindow(windowWidth, windowHeight, "calculatePosition");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    const widthOfRectangle1 = calculateSize(
        widthRatioOfRectangle1,
        windowWidth,
    );
    const heightOfRectangle1 = calculateSize(
        heightRatioOfRectangle1,
        windowHeight,
    );
    const widthOfRectangle2 = calculateSize(
        widthRatioOfRectangle2,
        widthOfRectangle1,
    );
    const heightOfRectangle2 = calculateSize(
        heightRatioOfRectangle2,
        heightOfRectangle1,
    );
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
