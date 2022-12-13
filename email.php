<style>
@font-face {
	font-family: FuturaPTDemi;
	src: url(../fonts/FuturaPTDemi.otf);
}
@font-face {
	font-family:FuturaPTMedium;
	src: url(../fonts/FuturaPTMedium.otf);
}
</style>


<?php

		$username = $_POST["name"];
		$email =  $_POST["email"]; 
		$comment = $_POST["comt"]; 


		// multiple recipients
		$to  = 'info@code-stir.com'; // note the comma 

	
		// message
		$message = "
		<html>
		<head>
		  <title>Contact Mail</title>
		</head>
		<body>
		  <h2>Contact Mail From Site</h2>
			<p><b>Name : $username;</b></p>
			<p><b>Email Address : $email;</b></p>
			<p><b>Comment : $comment;</b></p>
		</body>
		</html>
		";

		// To send HTML mail, the Content-type header must be set
        $headers .= "Reply-To: info@code-stir.com/ \r\n";
        $headers .= "Return-Path: info@code-stir.com/ \r\n";
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		// Additional headers

		$headers .= 'From: info@code-stir.com' . "\r\n";

		// Mail it
		
		
		// send email
		if(mail($to, $subject, $message, $headers)){
		
			//header('Location: http://www.google.com/');
			echo '
			<div class="thank" style="background: #f7f7f7 none repeat scroll 0 0; margin-top: 200px; padding: 20px; text-align: center;">
<h1 style="color: #10ccec;font-size: 50px;margin-bottom: 0; font-family: FuturaPTDemi; letter-spacing:1px;">Thank You!</h1>
<h3 style="	font-family:FuturaPTMedium; letter-spacing:1px;">Your Message is received and we will contact you soon.</h3>
<a href="http://code-stir.com/">Back to home</a>
</div>
			';		
				
			//echo "Thank you Your Message Sent Successfully.";
		}else{
			print_r(error_get_last());
		}


		
		
		//echo $_SERVER['HTTP_REFERER'];
?>

