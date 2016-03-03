<!DOCTYPE html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />

<?php


if (!empty($_POST)) {


if ($_POST['pizz'] == "No " or $_POST['pizz'] == "Yes ")
file_put_contents('pizza.txt', $_POST['pizz'] );

}

?>




<script type="text/javascript">

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
	            document.getElementById("div").innerHTML = txtFile.responseText + "pizza";
	            console.log(txtFile.responseText);
				if (txtFile.responseText == "No ") document.body.style.backgroundColor="Red";
				else document.body.style.backgroundColor="Green"
	        }
	    }
	}

txtFile.send(null)



}
</script>


</head>


<body onload="read();">


<h2>Do you have pizza?</h2>
<br>

<form method="post" action="pizza.php" onsubmit="read();">
	<input type="radio" name="pizz" value="Yes "> Yes<br>
	<input type="radio" name="pizz" value="No "> No<br>
	<input type="submit" value="Send" name="butt" id="butt"><br>

</form>

<br><br>
<input type="button" value="Check Pizza" onClick="read()">
<br>
<div id="div">
</div>

</body>
