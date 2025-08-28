// js/transparent-sphere.js
window.addEventListener('load', () => {
    const transparentSphereSketch = (sketch) => {
        let txt;
        let sphereSize;

        // Function to calculate and cache sphere size
        const updateSphereSize = () => {
            let maxWidth = 1920, minWidth = 400;
            let maxFraction = 0.2, minFraction = 0.16;
            let t = sketch.constrain((sketch.width - minWidth) / (maxWidth - minWidth), 0, 1);
            let sphereFraction = sketch.lerp(minFraction, maxFraction, t);
            sphereSize = Math.min(sketch.width, sketch.height) * sphereFraction;
        };

        sketch.setup = () => {
            let canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
            canvas.parent('transparent-sphere');

            // Limit frame rate to 30fps
            sketch.frameRate(30);

            let bufferWidth = 2000;
            let bufferHeight = 1000;
            let name = sketch.createGraphics(bufferWidth, bufferHeight);
            name.textFont('Courier New');
            name.textAlign(sketch.CENTER, sketch.CENTER);
            name.textSize(110);

            let customText = "VALLEYWESTWEB";

            name.fill(0, 0, 0, 100);
            name.text(customText, name.width / 2 + 3, name.height / 2 + 3);

            name.fill(220);
            name.text(customText, name.width / 2, name.height / 2);

            txt = name.get();
            name.remove();

            // Calculate initial sphere size
            updateSphereSize();
        };

        sketch.draw = () => {
            sketch.clear();
            sketch.translate(0, 60, 0);
            sketch.noStroke();
            sketch.texture(txt);
            sketch.rotateY(sketch.millis() * 0.0005);

            sketch.push();
            sketch.fill(255, 255, 255, 10);
            sketch.drawingContext.enable(sketch.drawingContext.CULL_FACE);
            sketch.drawingContext.cullFace(sketch.drawingContext.BACK);
            sketch.sphere(sphereSize, 16, 12);
            sketch.pop();

            sketch.push();
            sketch.drawingContext.enable(sketch.drawingContext.CULL_FACE);
            sketch.drawingContext.cullFace(sketch.drawingContext.FRONT);
            sketch.sphere(sphereSize, 16, 12);
            sketch.pop();
        };

        sketch.windowResized = () => {
            sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
            updateSphereSize(); // recalc cached size on resize
        };
    };

    new p5(transparentSphereSketch);
});
