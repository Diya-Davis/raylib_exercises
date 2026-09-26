const sketch = require("./03_scale_and_center_sketch");

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

