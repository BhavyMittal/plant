status = "";
plants_image = "";

function preload()
{
    plants_image = loadImage("potted_plants.jpg");
}

function setup()
{

    canvas = createCanvas(640,350);
    canvas.position(315,200);

    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(plants_image,gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
    }

}

function draw()
{
    image(plants_image,0,0,640,350);
}