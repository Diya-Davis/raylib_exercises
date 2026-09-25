const sketch = require("./06_particle_scanner_sketch");

function loop() {
    while (sketch.running()) {
        sketch.draw();
        sketch.update();

    }
}

function main() {
    sketch.setup();
    loop();
}

main();

