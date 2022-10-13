function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YMVEPktBk/',modelready);
}

function modelready(){
    classifier.classify(gotResults);
}

function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
}
}