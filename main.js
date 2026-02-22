const CANVAS=document.getElementById("canvas")
const CANVAS_CONTEXT=CANVAS.getContext("2d")
const FRAME_WIDTH=window.innerWidth
const FRAME_HEIGHT=window.innerHeight



const drawCircle=function(x,y){

  CANVAS_CONTEXT.clearRect(0,0,FRAME_WIDTH,FRAME_HEIGHT)
  
  CANVAS_CONTEXT.beginPath()
  
  CANVAS_CONTEXT.arc(x,y,40,0,2*Math.PI)
  
  CANVAS_CONTEXT.stroke()
}



CANVAS.width=FRAME_WIDTH
CANVAS.height=FRAME_HEIGHT


drawCircle(FRAME_WIDTH/2,FRAME_HEIGHT/2)

document.onmousemove=function(ev){

  drawCircle(ev.clientX,ev.clientY)
}
