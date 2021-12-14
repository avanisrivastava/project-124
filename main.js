function preload(){

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(500,150);
    video=createCapture(VIDEO);
    video.size(450,450);
    poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.lenght>0){
console.log(results);
}
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function draw(){
    background('#9737F0');
}

