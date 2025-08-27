// js/transparent-sphere.js
window.addEventListener('load', () => {
    const transparentSphereSketch = (sketch) => {
        let txt;

        sketch.setup = () => {
            let canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
            canvas.parent('transparent-sphere');

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
        };

        sketch.draw = () => {
            sketch.clear();
            sketch.translate(0, 60, 0);
            sketch.noStroke();
            sketch.texture(txt);
            sketch.rotateY(sketch.millis() * 0.0005);

            let maxWidth = 1920, minWidth = 400;
            let maxFraction = 0.2, minFraction = 0.16;
            let t = sketch.constrain((sketch.width - minWidth) / (maxWidth - minWidth), 0, 1);
            let sphereFraction = sketch.lerp(minFraction, maxFraction, t);
            let sphereSize = Math.min(sketch.width, sketch.height) * sphereFraction;

            sketch.push();
            sketch.fill(255, 255, 255, 10);
            sketch.drawingContext.enable(sketch.drawingContext.CULL_FACE);
            sketch.drawingContext.cullFace(sketch.drawingContext.BACK);
            sketch.sphere(sphereSize);
            sketch.pop();

            sketch.push();
            sketch.drawingContext.enable(sketch.drawingContext.CULL_FACE);
            sketch.drawingContext.cullFace(sketch.drawingContext.FRONT);
            sketch.sphere(sphereSize);
            sketch.pop();
        };

        sketch.windowResized = () => {
            sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
        };
    };

    new p5(transparentSphereSketch);
});
