canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(260,200,50,0,2*Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(370,200,50,0,2*Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(480,200,50,0,2*Math.PI);
ctx.stroke();
 
color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(310,270,50,0,2*Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(430,270,50,0,2*Math.PI);
ctx.stroke();
    
