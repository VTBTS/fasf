noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;
function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('Loaded!');
}

function gotPoses(results){
    if(results.length > 0){
    
    
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("noseX = " + noseX + "and noseY ="+ noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    diffrence=floor(leftWristX - rightWristX);
    console.log("Left Wrist:"+leftWristX+"right wrist"+rightWristX+ "diffrence"+ diffrence);}
    
}
function draw(){
    background('#969A97');  
    fill('#9d03fc');
    stroke('#6eaceb');
    text("Hardik", noseX , noseY , diffrence);
    document.getElementById("result_para_tag").innerHTML=diffrence+"px";
}  

