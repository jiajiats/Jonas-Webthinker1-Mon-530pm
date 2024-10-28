let ctx, canvas, x, y, ballRadius, dx, dy;
window.onload = () => {
    canvas = document.getElementById('canvasBoard');
    ctx = canvas.getContext('2d');

    ballRadius=10;
    x=canvas.width/2-ballRadius/2;
    y=canvas.height/2-ballRadius/2;
    dx=2;
    dy=2;

    updateCanvas();
}

const updateCanvas = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillstyle="rgb(0,200,0)"
    ctx.arc(x,y,ballRadius,0,2*Math.PI);
    ctx.stroke()
    ctx.fill()
    ctx.closePath();

    if (x+dx>canvas.width-ballRadius||x+dx<ballRadius){
        dx=-dx;
    }
    if (y+dy>canvas.height-ballRadius||y+dy<ballRadius){
        dy=-dy;
    }

    x=x+dx;
    y=y+dy;

    requestAnimationFrame(updateCanvas);
}
// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(100,100);
// ctx.moveTo(500,0);
// ctx.lineTo(800,600);
// ctx.stroke();

// ctx.fillStyle = "rgba(0, 200, 0, 0.1)";
// ctx.fillRect(10,10,100,100);

// ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
// ctx.fillRect(100,100,200,200);

// ctx.lineWidth = 10;
// ctx.strokeStyle = "rgb(200, 0, 0)"
// ctx.fillStyle = "rgb(0, 200, 0)"

// ctx.beginPath();
// ctx.arc(400,300,100, 0, 2*Math.PI);
// ctx.stroke();
// ctx.fill();