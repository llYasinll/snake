var cols;
var rows;
var snake;
var food;
var scl = 20;

function setup() {
    createCanvas(800, 600);
    rows = floor(height / scl);
    cols = floor(width / scl);
    snake = new Snake();
    food = new Food();
    frameRate(10);
}

function draw() {
    background(51);
    fill(255);
    snake.show();
    snake.update();
    food.show();
    snake.eat();
    food.update();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    }
}
