var unknown = [300,300];
var pointer;



window.onload = start;

function start(){
    $("puzzlearea").style.transition = "all 2s";
 	var p_list = $$('div#puzzlearea div');
 	for (var i = 0; i < p_list.length; i++) {
	 		p_list[i].addClassName('puzzlepiece');
    }
    
	set_up();
	
    //movable(14);
	//move(14);
	$("shufflebutton").onclick = shuffle;
	//$("shufflebutton").onclick = move(7);

	for (var i = 0; i < p_list.length; i++) {
		p_list[i].onmouseover = hover;
		//p_list[i].onclick = movable(i);
	}

	//-------here we go--------
    p_list[0].onclick = move0;
    p_list[1].onclick = move1;
    p_list[2].onclick = move2;
    p_list[3].onclick = move3;
    p_list[4].onclick = move4;
    p_list[5].onclick = move5;
    p_list[6].onclick = move6;
    p_list[7].onclick = move7;
    p_list[8].onclick = move8;
    p_list[9].onclick = move9;
    p_list[10].onclick = move10;
    p_list[11].onclick = move11;
    p_list[12].onclick = move12;
    p_list[13].onclick = move13;
    p_list[14].onclick = move14;
	//-------------------------
}

function coor(){
    var num = Math.random() * (300 - 0) + 0;
    //alert(num);
    if (num < 61){
    	return 0;
    }else if((num>60) && (num <131)){
    	return 100;
    }else if((num>130) && (num < 200)){
    	return 200;
    }else{
    	return 300;
    }
}

function shuffle(){
	var left;
	var top;

	var p_list = $$('div#puzzlearea div');
	for (var r=0; r <10; r++){
		left = coor();
		top = coor();
		for (var i = 0; i < p_list.length; i++) {
			
			//alert(left+", "+top);

			if ( (left == p_list[i].positionedOffset(p_list[i])[0]) && (top == p_list[i].positionedOffset(p_list[i])[1])){
				move(i);
			}
		}
	}

}


function set_up(){
	var top = 0;
	var left = 0;
	var img_x = 0;
	var img_y = 0;
    
	var p_list = $$('div#puzzlearea div');
	for (var i = 0; i < p_list.length; i++) {

		p_list[i].setStyle({
	 		top: String(top)+"px",
	 		left: String(left)+"px",
	        backgroundPosition: String(img_x)+"px "+String(img_y)+"px"
	    });

	    

           
         if ((i+1)%4 == 0){
         	top+= 100;
         	left =0;;
         	img_x = 0;
         	img_y -= 100;

         }else{
         	left+= 100;
         	img_x-= 100;
         }
	 		
	}
	//alert("Left: "+p_list[14].positionedOffset(p_list[14])[0]+" and Top: "+p_list[14].positionedOffset(p_list[14])[1]);
	//alert(unknown[0]+" "+unknown[1]);

    $("overall").style.backgroundColor = "green";

}

function move(i){
	var p_list = $$('div#puzzlearea div');
	temp_left = p_list[i].positionedOffset(p_list[i])[0];
	temp_top = p_list[i].positionedOffset(p_list[i])[1];
	p_list[i].setStyle({
		left: String(unknown[0])+"px",
		top: String(unknown[1])+"px"
	});

	unknown[0] = temp_left;
	unknown[1] = temp_top;
	//alert(unknown);

}


function highlight(i){
	var p_list = $$('div#puzzlearea div');
	p_list[i].setStyle({
		border: "3px solid red"
	});


}

function movable(x){
	//var x = 14;
	var p_list = $$('div#puzzlearea div');
	
    
    var temp1 = [];
	temp1[0] = unknown[0];
	temp1[1] = unknown[1];
	temp1[0] += 100;;

	var temp2 = [];
	temp2[0] = unknown[0];
	temp2[1] = unknown[1];
	temp2[0]-= 100;

	var temp3 = [];
	temp3[0] = unknown[0];
	temp3[1] = unknown[1];
	temp3[1]+= 100;

	var temp4 = [];
	temp4[0] = unknown[0];
	temp4[1] = unknown[1];
	temp4[1]-= 100;

	if (p_list[x].positionedOffset(p_list[x])[0] == temp1[0] && p_list[x].positionedOffset(p_list[x])[1] == temp1[1]){
		p_list[x].setStyle({
			//transition = "all 2s",
		    left: String(unknown[0])+"px"
	    });
	    unknown[0] = temp[0];
	}else if (p_list[x].positionedOffset(p_list[x])[0] == temp2[0] && p_list[x].positionedOffset(p_list[x])[1] == temp2[1]){
		//$('.p_list[x]').style.transition = "left 0.25 linear 0s";
		p_list[x].setStyle({
			//$('.p_list[x]').style.transition = "left 0.25 linear 0s",
		    left: String(unknown[0])+"px"
	    });
	   unknown[0] = temp[0];
	}else if (p_list[x].positionedOffset(p_list[x])[0] == temp3[0] && p_list[x].positionedOffset(p_list[x])[1] == temp3[1]){
		p_list[x].setStyle({
			//transition = "all 1s",
		    top: String(unknown[1])+"px"
	    });
	   unknown[1] = temp[1];
	}else if (p_list[x].positionedOffset(p_list[x])[0] == temp4[0] && p_list[x].positionedOffset(p_list[x])[1] == temp4[1]){
		p_list[x].setStyle({
			//transition = "all 1s",
		    top: String(unknown[1])+"px"
	    });
	   unknown[1] = temp[1];
	}else{

		return false;
	}
}


function hover(){
	var p_list = $$('div#puzzlearea div');
 	for (var i = 0; i < p_list.length; i++) {
	 		p_list[i].addClassName("movablepiece");

     }
     //alert("blehhhh");
}


//------------Here we go again...
function move0(){
	movable(0);
}
function move1(){
	movable(1);
}
function move2(){
	movable(2);
}
function move3(){
	movable(3);
}
function move4(){
	movable(4);
}
function move5(){
	movable(5);
}
function move6(){
	movable(6);
}
function move7(){
	movable(7);
}
function move8(){
	movable(8);
}
function move9(){
	movable(9);
}
function move10(){
	movable(10);
}
function move11(){
	movable(11);
}
function move12(){
	movable(12);
}
function move13(){
	movable(13);
}
function move14(){
	movable(14);
}

//---------------------------------


