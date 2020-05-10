window.onload = function() {
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");
    var widht = canvas.widht;
    var height = canvas.height;
    var wallpaper = context.createImageData(widht, height);

    function createImage(offset) {
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {

                var pixelindex = (y * width + x) * 4;
                var red = ((x + offset) % 256) ^ ((y + offset) % 256);
                var green = ((2 * x + offset) % 256) ^ ((2 * y + offset) % 256);
                var blue = 50 + Math.floor(Math.random() * 100);
                blue = (blue + offset) % 256;
                imagedata.data[pixelindex] = red; // Red
                imagedata.data[pixelindex + 1] = green; // Green
                imagedata.data[pixelindex + 2] = blue; // Blue
                imagedata.data[pixelindex + 3] = 255; // Alpha
            }

        }

    }

    function main(tframe) {
        // Request animation frames
        window.requestAnimationFrame(main);

        // Create the image
        createImage(Math.floor(tframe / 10));

        // Draw the image data to the canvas
        context.putImageData(imagedata, 0, 0);
    }

    // Call the main loop
    main(0);
};