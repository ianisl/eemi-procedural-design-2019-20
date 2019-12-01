let rectColors;
let bgColor;
let startX;
let startY;
let totalWidth;
let rectMaxHeight;
let rectCount;
let seed;
let image;

function preload() {
    // Image source: https://unsplash.com/photos/cC3PtGqsh8Q by Paul Dufour
    image = loadImage('https://images.unsplash.com/photo-1487171961746-31db1c9c35a9?ixlib=rb-0.3.5&s=6d4ff82da07aedbb2580c557edbc7afb&auto=format&fit=crop&w=1038&q=80');
}

function setup() {
    createCanvas(600, 600);
    seed = floor(random(0, 100));
    bgColor = color(163, 167, 174);
    startX = 75;
    startY = 75;
    totalWidth = 450;
    rectMaxHeight = 450;
    rectCount = 10;
    rectColors = [];
    for (let i = 0; i < rectCount; i++) {
        let x = floor(random(image.width));
        let y = floor(random(image.height));
        let c = image.get(x, y);
        rectColors.push(c);
    }
}

function draw() {
    randomSeed(seed);
    background(bgColor);
    noStroke();
    let l = totalWidth / rectCount;
    for (let i = 0; i < rectCount; i++) {
        fill(rectColors[i]);
        let x = startX + i * l;
        rect(x, startY, l, random(0, rectMaxHeight));
    }
}

function keyTyped() {
    if (key === 'n') {
        seed = floor(random(0, 100)); // New seed
    }
    if (key === 'r') {
        document.location.reload(true); // Reload the page
    }
}
