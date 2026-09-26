const r = require("raylib");
const windowWidth = 600;
const windowHeight = 600;
const sourceX = 300;
const sourceY = 300;
const sourceRadius = 5;
const target1X = 500;
const target1Y = 200;
const target1Radius = 5;
const target2X = 500;
const target2Y = 500;
const target2Radius = 5;
r.InitWindow(windowWidth, windowHeight, "calculatePosition");
r.SetTargetFPS(60);

function calculateDistance(sourceX, sourceY, targetX, targetY) {
    return ((sourceX - targetX) ** 2 + (sourceY - targetY) ** 2) ** 0.5;
}

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.DrawCircle(sourceX, sourceY, sourceRadius, r.RED);
    r.DrawCircle(target1X, target1Y, target1Radius, r.GREEN);
    r.DrawCircle(target2X, target2Y, target2Radius, r.YELLOW);
    const distanceBtwTarget1 = calculateDistance(
        sourceX,
        sourceY,
        target1X,
        target1Y,
    );
    const distanceBtwTarget2 = calculateDistance(
        sourceX,
        sourceY,
        target2X,
        target2Y,
    );
    if (distanceBtwTarget1 < distanceBtwTarget2) {
        r.DrawLine(sourceX, sourceY, target1X, target1Y, r.WHITE);
    } else {
        r.DrawLine(sourceX, sourceY, target1X, target1Y, r.WHITE);
    }
    r.EndDrawing();
}
