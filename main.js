canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x,last_position_y;
color = "pink"; 
width_of_line=1
radius=20;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    console.log(color);

    mouseEvent="mousedown"
    
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
  mouseEvent="mouseleave"  
}


canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_posiion_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_posiion_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;


        ctx.arc(current_posiion_of_mouse_x,current_posiion_of_mouse_y,radius,0,2*Math.PI);

        ctx.stroke();

    }
    last_position_x=current_posiion_of_mouse_x;
    last_position_y=current_posiion_of_mouse_y;

}


function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
