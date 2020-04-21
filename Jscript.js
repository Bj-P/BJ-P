// The function gets called when the window is fully loaded
window.onload = function() {

    // Define the image dimensions
    var width = canvas.width;
    var height = canvas.height;

}

var Bpixels = new bpixels({
    id: 'particles',
    width: window.innerWidth,
    height: window.innerHeight,
    particleSize: 2,
    lineSize: 1,
    particleColor: [255, 255, 255, 0.3],
    lineColor: [255, 255, 255],
    backgroundFrom: [10, 25, 100],
    backgroundTo: [25, 50, 150],
    backgroundDuration: 4000,
    nobg: false,
    number: window.hasOwnProperty('orientation') ? 30 : 100,
    speed: 20,
    pointerCircleRadius: 150
});

function makebackground(offset) {
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < width; y++) {
            var pixelindex = (y * width + x);

        }
    }
}