function preload(){
classifier=ml5.imageClassifier('DoodleNet')
}
function setup(){
canvas=createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;

}
function clearCanvas(){
    background("white")
}
function draw(){
    strokeWeight(5);
    stroke('red');
    if (mouseIsPressed){
       line(pmouseX,pmouseY,mouseX,mouseY);
    }  
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);

}
function gotResult(error,results){
    if (error){
        console.error(error);

    }
    
} 