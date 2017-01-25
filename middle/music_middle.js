var sec = new Array();
var secItem = new Array();
var item = ["1top.png","2down.png","3left.png","4right.png"];
var startImg=["start1.png","start2.png","start3.png","start4.png"]
var count=0;				//遊戲開始後經過幾秒
var doubleCount=0;			//遊戲開始後經過雙倍幾秒
			 //紀錄第一次要按按鍵 共有166個
			 //0   1   2   3   4   5   6   7   8   9  //(原本的秒數*2)-9
			 //1~7
recordFirst =['0','0','0','0','0','0','0','0','0','0',							
			  '1','0','1','0','0','0','0','0','0','1',
			  '0','1','0','0','0','0','0','0','1','0',
			  '1','0','1','0','0','0','0','1','0','0',
			  '0','0','0','0','1','0','0','1','0','0',
			 //8~
			  '0','0','0','1','0','0','0','1','0','1',
			  '0','1','0','1','0','0','1','1','0','0',
			  '1','0','0','1','0','0','0','1','0','1',
			  '1','0','1','0','1','0','0','1','0','1',
			  '0','0','0','0','1','0','0','1','0','0',
			 //0   1   2   3   4   5   6   7   8   9  //(原本的秒數*2)-9
			  '1','0','0','0','0','1','0','0','0','0',
			  '0','0','0','1','0','1','0','0','0','1',
			  '0','1','0','0','1','0','1','0','1','0',
			  '0','1','1','0','0','1','0','1','0','1',
			  '0','0','1','0','1','0','0','1','0','1',
			  
			  '0','1','0','1','0','1','0','1','0','1',
			  '0','1','0','1','0','1','0','0','0','1',
			  '1','0','1','0','1','0','1','0','0','1',
			  '1','0','1','0','1','0','1','0','1','0',
			  '1','1','0','1','0','1','1','0','1','0',
			 //0   1   2   3   4   5   6   7   8   9  //(原本的秒數*2)-9
			  '1','0','1','1','0','1','0','1','0','1',
			  '0','1','1','0','1','0','1','1','0','1',
			  '0','1','0','1','0','0','0','1','1','0',
			  '1','0','1','0','1','0','1','0','1','0',
			  '1','0','1','1','0','1','0','1','1','0',
			  
			  '0','1','1','1','0','1','1','1','0','1',
			  '1','0','0','1','1','0','1','0','1','0',
			  '1','1','0','1','0','1','1','0','1','1',
			  '0','1','0','1','0','1','0','1','0','1',
			  '0','0','0','0','0','0','0','0','0','1',
			 //0   1   2   3   4   5   6   7   8   9  //(原本的秒數*2)-9
			  '0','1','1','0','1','0','1','0','0','0',
			  '1','0','1','0','0','1','0','0','1','0',
			  '0','1','0','1','0','1','0','0','1','0',
			  '0','1','0','0','1','0','0','1','0','1',
			  '0','1','0','1','0','1','0','1','0','1',
			  
			  '0','1','0','0','0','1','0','0','1','0',
			  '0','1','0','0','1','0','1','0','0','1',
			  '1','0','1','0','1','0','0','1','0','1',
			  '0','0','1','0','0','1','0','0','1','0',
			  '0','0','1','0','0','1','0','1','0','0',
			 //0   1   2   3   4   5   6   7   8   9  //(原本的秒數*2)-9
			  '1','0','1','0','1','0','0','1',		 ];
var recordCorrect = new Array(219);	//把隨機的圖片記錄起來 以方便驗證輸入正確

var recordCorrectNum = 0;//有幾個隨機的圖片
var secCorrect = 0;			 //按下幾次正確的

var MarqueeIdcount = 0;	
var ImgIdcount = 0;				//圖片總數
var DivIdcount = 0;				//區塊總數
var judgeCount = 0;
var deleteCount = 0;
var comboCount = 0;

var zMarqueeIndex = 3;

//load
function load(){
	var scHight = window.screen.height;
	var scWidth = window.screen.width;
	scHight = scHight * 0.75;
	
	console.log(scHight);
	console.log(scWidth);
	
	/* p = document.getElementById("p1");
	var temp = "<canvas id='c2canvas'"+
				"style='position:absolute;left:20%; z-index:1;'"+
				"width='795' height='"+scHight+"'>"+
			"</canvas> ";
	p.innerHTML = temp;
	*/
	var div = document.getElementById("div");
	var tempDiv ="<img id='section' src='keyin.png'"+
				"style=z-index:2;'  width='800px'	height='100px'/>";
	div.innerHTML = tempDiv;
}

//遊戲開始
function gameStart(x){
	deleteButton();
	var movie=document.getElementById("movie");
	movie.play();
	countSec();//開始計時
	
	keyRunFirst();
	
	//在视频/音频（audio/video）播放结束时触发。
	movie.onended = function(){
		console.log(secCorrect);
		console.log(ImgIdcount);
		gameStop();
	}
}
//遊戲結束 判斷分數
function gameStop(){
	
	if(secCorrect>110)
		getS();
	else if(secCorrect>90)
		getA();
	else if(secCorrect>70)
		getB();
	else if(secCorrect>40)
		getC();
	else if(secCorrect>=0)
		getD();
}
function getS(){
	document.location.href="../���{�����M��/S_level.html";
}
function getA(){
	document.location.href="../���{�����M��/A_level.html";
}
function getB(){
	document.location.href="../���{�����M��/B_level.html";
}
function getC(){
	document.location.href="../���{�����M��/C_level.html";
}
function getD(){
	document.location.href="../���{�����M��/D_level.html";
}
//按鈕按下後消失
function deleteButton(){
	var startButton=document.getElementById("p2");
	var temp="";
	startButton.innerHTML=temp;
	
	var stopButton=document.getElementById("p3");
	var temp2=
			"<img class = 'animation pulse' src='s.png' style='z-index:100'; width='40px' height='40px' onclick='gameStop()'/>"+
			"<img class = 'animation pulse' src='t.png' style='z-index:100'; width='40px' height='40px' onclick='gameStop()'/>"+
			"<img class = 'animation pulse' src='o.png' style='z-index:100'; width='40px' height='40px' onclick='gameStop()'/>"+
			"<img class = 'animation pulse' src='p.png' style='z-index:100'; width='40px' height='40px' onclick='gameStop()'/>";
	stopButton.innerHTML = temp2;
}



//送按鍵出來
function keyRunFirst(){	
	doubleCount += 1;	
	if(recordFirst[doubleCount]==1)
	{
		addNote(doubleCount);
		//setTimeout("judge()",4000);
	}
	//console.log(doubleCount);
	setTimeout("keyRunFirst()", 500);
		
}



//判斷是否正確
function judge(e){
	console.log(doubleCount);
	//console.log(recordCorrect[doubleCount-7]);//現在案的是正在星星的

	if(recordCorrect[doubleCount-7] =="1top.png"){
		if(e.keyCode == 38){
			judge2good();
		}
		else{
			judge2bad();
		}
	}
	else if(recordCorrect[doubleCount-7] =="2down.png"){
		if(e.keyCode == 40){
			judge2good();
		}
		else{
			judge2bad();
		}
	}
	else if(recordCorrect[doubleCount-7] =="3left.png"){
		if(e.keyCode == 37){
			judge2good();
		}
		else{
			judge2bad();
		}
	}
	else if(recordCorrect[doubleCount-7] =="4right.png"){
		if(e.keyCode == 39){
			 judge2good();
		}
		else{
			judge2bad();
		}
	}
}
function judge2bad(){
	var badkey=document.getElementById("badSound");
		badkey.play();
}
function judge2good(){
	var key=document.getElementById("goodSound");
		key.play();
		secCorrect +=1;
		changeStar();
	//按下正確的圖片消失
	var temp=doubleCount-7;
	var ImgId = "img-" + temp;
	var Img=document.getElementById(ImgId);
	Img.setAttribute("src", "");
	Img.setAttribute("height", "");
	Img.setAttribute("width", "");
}
//如果按對 切換背景
function changeStar(){
	var div1 = document.getElementById("div");
	var tempDiv1 ="<img src='keyinCorrect.png'"+
				"style=' z-index:2;'	width='800px'	height='100px'/>";
	div1.innerHTML = tempDiv1;
	setTimeout("changeStar2()", 500);
}
function changeStar2(){
	var div2 = document.getElementById("div");
	var tempDiv2 ="<img  src='keyin.png'"+
				"style=' z-index:2;'	width='800px'	height='100px'/>";
	div2.innerHTML = tempDiv2;
}
//如果按對 切換背景結束
//判斷是否正確結束


//每次按鍵會有音效
function keyDown(e){
	var key=document.getElementById("keySound");
	
	if(e.keyCode>=37 && e.keyCode<=40)//只有按到上下左右才會有音效
		key.play();
}
//計時
function countSec(){
	count += 1;
	setTimeout("countSec()", 1000);
	//console.log(count);
}



//新增圖片+跑馬燈+區塊
function addNote(doubleCount) {	
	var DivID = "Div-" + DivIdcount;
	var MarqueeID = "Marquee-" + MarqueeIdcount;
	
    var newImgNode = createNewNoteImgNode();
	var newMarquee = createNewNoteMarqueeNode();
	var newDiv =  createNewNoteDivNode();
	
	document.body.appendChild(newDiv);//新的區塊黏回去body
	document.getElementById(DivID).appendChild(newMarquee); //Marquee黏回去區塊裡
	document.getElementById(MarqueeID).appendChild(newImgNode);//圖片黏到新的marquee上
} // end function addNote
//新增圖片
function createNewNoteImgNode() {
    var newNode = document.createElement("img");
    var nodeId = "img-" + doubleCount;
	
    newNode.setAttribute("id", nodeId); // set newNode's id
	
	var r=RandomImg();					//random
	newNode.setAttribute("src", r);
	recordCorrect[doubleCount] = r;		//把隨機的東西記錄起來
	//console.log(recordCorrect);
	
    newNode.setAttribute("height", "65px");
    newNode.setAttribute("width", "65px");
	
	//console.log(newNode.getAttribute("id"));	//顯示出現了幾個圖片
	ImgIdcount++;
    return newNode;
} // end function createNewNode
// 新增跑馬燈
function createNewNoteMarqueeNode() {
    var newNode = document.createElement("marquee");
    var nodeId = "Marquee-" + MarqueeIdcount;
   
    newNode.setAttribute("id", nodeId); // set newNode's id
	newNode.setAttribute("scrollamount", "15");
	newNode.setAttribute("direction", "right"); 
	newNode.setAttribute("loop", "1");
    newNode.setAttribute("style", "z-index:" + zMarqueeIndex);
	newNode.setAttribute("style", "position:relative; top:20px");
	zMarqueeIndex = zMarqueeIndex+1;

   //console.log(newNode.getAttribute("id"));
	 ++MarqueeIdcount;
    return newNode;
} // end function createNewNode
//新增區塊
function createNewNoteDivNode() {
    var newNode = document.createElement("div");
    var nodeId = "Div-" + DivIdcount;
   
    newNode.setAttribute("id", nodeId); // set newNode's id
	newNode.setAttribute("margin", "2px");
	DivIdcount = DivIdcount+1;
    return newNode;
} // end function createNewNode
//新增圖片+跑馬燈+區塊結束

//randomImg 0~3 共四個
function RandomImg(){
	var r = Math.floor(Math.random()*4);
	return item[r];
}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keydown", judge, false);

/*
document.onkeydown=function(event){
var e = event || window.event || arguments.callee.caller.arguments[0];

if(e && e.keyCode==38 || e && e.keyCode==37){//上,左
alert('38=上键，37=左键');
}

if(e && e.keyCode==40 || e && e.keyCode==39){//下,右
alert('38=下键，37=右键');
}
}; 


function disRun()
{
	var div=document.getElementById("div");
	var divTemp ="<marquee id ='marquee-0' scrollamount='15'; direction='right'; loop='1';>"+
					"</marquee>";
	div.innerHTML = divTemp;
}
*/