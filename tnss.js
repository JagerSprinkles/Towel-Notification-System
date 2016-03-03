
var ttt = ["q", "w", "e", "r", "t", "rese", "butt", "fon" , "exx"];

function dis(){ butt.value="Your Message Has Been Sent!";}
function ena(){ butt.value="Send another one you Towel";}
function runn() {
	
	setTimeout(chan,200);
	setTimeout(chan,300);
	setTimeout(chan,400);
	setTimeout(chan,500);
	setTimeout(chan,600);
	setTimeout(chan,700);
	setTimeout(chan,800);
	setTimeout(chan,900);


}
function chan(){

	
	


	for (var i = 0 ; i < ttt.length; i++) {

		fff = (Math.random() * 23 | 0);
		
		if(fff == 0) document.getElementById(ttt[i]).style.fontFamily = 'gal';
		else if (fff == 1) document.getElementById(ttt[i]).style.fontFamily = 'Comic Sans MS', 'Comic Sans', 'comic sans', 'Chalkboard SE', 'Comic Neue', 'cursive';
		else if (fff == 2) document.getElementById(ttt[i]).style.fontFamily = 'Impact', 'Charcoal', 'sans-serif';
		else if (fff == 3) document.getElementById(ttt[i]).style.fontFamily = 'ad';
		else if (fff == 4) document.getElementById(ttt[i]).style.fontFamily = 'as';
		else if (fff == 5) document.getElementById(ttt[i]).style.fontFamily = 'ast';
		else if (fff == 6) document.getElementById(ttt[i]).style.fontFamily = 'b2';
		else if (fff == 7) document.getElementById(ttt[i]).style.fontFamily = 'bc';
		else if (fff == 8) document.getElementById(ttt[i]).style.fontFamily = 'co';
		else if (fff == 9) document.getElementById(ttt[i]).style.fontFamily = 'es';
		else if (fff == 10) document.getElementById(ttt[i]).style.fontFamily = 'ge';
		else if (fff == 11) document.getElementById(ttt[i]).style.fontFamily = 'kn';
		else if (fff == 12) document.getElementById(ttt[i]).style.fontFamily = 'ma';
		else if (fff == 13) document.getElementById(ttt[i]).style.fontFamily = 'og';
		else if (fff == 14) document.getElementById(ttt[i]).style.fontFamily = 're';
		else if (fff == 15) document.getElementById(ttt[i]).style.fontFamily = 'ss';
		else if (fff == 16) document.getElementById(ttt[i]).style.fontFamily = 'ty';
		else if (fff == 17) document.getElementById(ttt[i]).style.fontFamily = 'wp';
		else if (fff == 18) document.getElementById(ttt[i]).style.fontFamily = 'ea';
		else if (fff == 19) document.getElementById(ttt[i]).style.fontFamily = 'qu';
		else if (fff == 20) document.getElementById(ttt[i]).style.fontFamily = 'yo';
		else if (fff == 21) document.getElementById(ttt[i]).style.fontFamily = 'layer';
		else if (fff == 22) document.getElementById(ttt[i]).style.fontFamily = 'troll';

	}


}



function fbgc(){

	for (var i = 0 ; i < ttt.length; i++)  {
		document.getElementById(ttt[i]).style.color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
		document.getElementById(ttt[i]).style.backgroundColor='rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+ Math.random() +')';

}
	setTimeout(fbgc,(Math.random() * 6000 | 0) + 1000);
}

function nof(){

	for (var i = 0 ; i < ttt.length; i++) document.getElementById(ttt[i]).style.fontFamily = 'Impact', 'Charcoal', 'sans-serif';
	document.body.style.backgroundImage="None";



}




function read()
{
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "pizza.txt", true);
	txtFile.onreadystatechange = function () 
	{
		if (txtFile.readyState === 4) 
		{  
	        // Makes sure the document is ready to parse.
	        if (txtFile.status === 200) 
	        {  
	             // Makes sure it's found the file.
	             
	             
	             if (txtFile.responseText == "No "){ document.body.style.backgroundColor="Red";
	             document.body.style.backgroundImage="None";
	             for (var i = 0 ; i < ttt.length; i++) document.getElementById(ttt[i]).innerHTML = txtFile.responseText + "there is no pizza";
	         }
	     else{ document.body.style.backgroundColor="Green";
	     	document.body.style.backgroundImage="None";
	     for (var i = 0 ; i < ttt.length; i++) document.getElementById(ttt[i]).innerHTML = txtFile.responseText + "there is pizza";

	 }
}
}
}

txtFile.send(null)


}
