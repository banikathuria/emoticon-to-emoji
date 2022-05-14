//https://teachablemachine.withgoogle.com/models/2UDWiaP_y///
Webcam.set({
width:300,
height:300,
image_format:"png",
png_quality:90    
})
Webcam.attach("#camera")
function takePic(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
})
}
console.log(ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2UDWiaP_y/model.json",modelLoaded)

function modelLoaded(){
console.log("Model is loaded")
}

function picture(){
    img= document.getElementById("captured_image")
    classifier.classify(img,gotresult)
}

function gotresult(error,result){
    if (error)
    {console.log(error)}
    else
    {console.log(result)}
}