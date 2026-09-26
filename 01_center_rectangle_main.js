const sketch = require("./01_center_rectangle_sketch");

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

