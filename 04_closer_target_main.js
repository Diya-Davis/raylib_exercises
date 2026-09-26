const sketch = require("./04_closer_target_sketch");

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

