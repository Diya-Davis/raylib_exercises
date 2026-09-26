const sketch = require("./05_intersecting_circles_sketch");

function loop() {
    while (sketch.running()) {
        sketch.draw();

    }
}

function main() {
    sketch.setup();
    loop();
    sketch.teardown();
}
main();

