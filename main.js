  

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 120, 80, 400, 300);
    
    fill(255,0,0);
    
    circle(50, 50, 90,);
    circle(590, 50, 90,);
    circle(590, 430, 90,);
    circle(50, 430, 90,);
    fill(0,255,0);
    rect(89, 35, 460, 30);
    rect(89, 420, 460, 30);
    rect(35, 90, 30, 300);
    rect(580, 90, 30, 300);


    
}
function take_snapshot() {
    save('ayushi.png');
}

