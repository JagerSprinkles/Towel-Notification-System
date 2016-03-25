
<?php
if (!empty($_POST)) {

	$message = "";
	$_POST['wat'] .= "\r\n";
	
	$message .= $_POST['mike'] . $_POST['vince'] . $_POST['marc'] . $_POST['warr'] . $_POST['neil'] . $_POST['alex'] . $_POST['christian'] . $_POST['nick'] . $_POST['wat'] ;
	
	$message .= $_POST['exx'];

	
	if($_POST['nickS']) {
		mail("qqqqqqqqqqq","Towel Alert!!!", $message, "From:qqqqqqqqqqq");
		mail("qqqqqqqqqqq","", $message, "From:qqqqqqqqqqq");
	}
	
	if($_POST['vinceS']) mail("qqqqqqqqq","", $message, "From:qqqqqqqqqqq");
	if($_POST['mikeS']) mail("qqqqqqqqqqqqq","", $message, "From:qqqqqqqqqqq");
	if($_POST['chriS']) mail("qqqqqqqqqqqqq","", $message, "From:qqqqqqqqqqq");
	
}
?>
