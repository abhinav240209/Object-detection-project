object_status="";
function preload(){
    bedroom=loadImage("bedroom.jpg");
    
}
function setup() {
    canvas=createCanvas(400,300);
    canvas.center();
    detector=ml5.objectDetector("cocossd",modelLoaded);
    detector.detect(bedroom,gotResult)
  }
  function draw() {
    image(bedroom,0,0,500,400);
    
  }
  function modelLoaded() {
    console.log("model is loaded");
    document.getElementById("status").innerHTML="Status : objects are being detected"
  }
  
  function gotResult(error,results){
    
    if(error){
      console.error(error);
    }
    else {
      console.log(results);
    }
    
  }
  