const sketch = require("./02_center_rectangle_in_rectangle_sketch");

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

