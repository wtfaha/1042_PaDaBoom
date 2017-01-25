var pos = 50;
var back = 0;
var keepMove = 5; //background move

image1 = new Image();
image1.src = "direction.png";
image2 = new Image();
image2.src = "direction1.png";

function start()
{
  var easy = document.getElementById("easy");
  var middle = document.getElementById("middle");
  var hard = document.getElementById("hard");
	
  easy.addEventListener("mouseout", mouseOut1);
  easy.addEventListener("mouseover", mouseOver1);
	
  middle.addEventListener("mouseout", mouseOut2);
  middle.addEventListener("mouseover", mouseOver2);
	
  hard.addEventListener("mouseout", mouseOut3);
  hard.addEventListener("mouseover", mouseOver3);
  
  document.getElementById("direction").addEventListener("mouseover",mouse_over,false);
  document.getElementById("direction").addEventListener("mouseout",mouse_out,false);
  move();
  
}


// background move
function move() 
{
	if(back == 0)
		++pos;
	else
		--pos;
		
    if (pos > 100) {
      back = 1;
    }
	else if (pos < 0) {
      back = 0;
    }
    document.body.setAttribute("style", "background-size:" + (window.screen.width+100) + "px " + (window.screen.height+1200) + "px; background-position:"+ (pos - 100) + "px; ");
	//document.getElementById(backimg).style.backgroundPosition = (pos -200) + "px "+ (pos - 200) + "px;";
	if(keepMove)
		setTimeout(move, 50);
  }
  
function mouse_over()
{
	document.getElementById("direction").setAttribute("src","direction1.png");
}

function mouse_out()
{
	document.getElementById("direction").setAttribute("src","direction.png");
}

function mouseOut1()
{
	document.getElementById("Easyul").setAttribute("style","display:none;");
}
	
function mouseOver1()
{
	document.getElementById("Easyul").setAttribute("style","display:block;");
}
	
function mouseOut2()
{
	document.getElementById("Middleul").setAttribute("style","display:none;");
	
}
	
function mouseOver2()
{
	document.getElementById("Middleul").setAttribute("style","display:block;");
}
	
function mouseOut3()
{
	document.getElementById("Hardul").setAttribute("style","display:none;");
}
	
function mouseOver3()
{
	document.getElementById("Hardul").setAttribute("style","display:block;");
}
	
window.addEventListener("load", start, false);