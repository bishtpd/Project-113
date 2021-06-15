function preload(){

}
function setup(){
    cnvs = createCanvas(1000, 800);
    cnvs.position(400, 300);
}
function draw(){
    circle(300, 500, 200);
    ellipse(200, 300, 90, 55);
    rect(400, 200, 300, 100);
}
function take_snapshot(){
    save("dot.png");
}