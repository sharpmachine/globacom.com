<?php

if(!$_POST) exit;

// Email address verification, do not edit.
function isEmail($email) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name = $_POST['name'];
$company = $_POST['company'];
$your_address = $_POST['address'];
$city = $_POST['city'];
$zip = $_POST['zip'];
$country = $_POST['country'];
$mobile = $_POST['mobile'];
$landline = $_POST['landline'];
$email = $_POST['email'];
$option1 = $_POST['option1'];
$option2 = $_POST['option2'];
$option3 = $_POST['option3'];
$option4 = $_POST['option4'];
$option5 = $_POST['option5'];
$option6 = $_POST['option6'];

if(trim($name) == '') {
	echo '<div class="row"><div class="col-xs-12 col-sm-6 col-sm-offset-6"><div class="alert alert-warning error_message">Attention! You must enter your name.</div></div></div>';
	exit();
} else if(trim($country) == '') {
	echo '<div class="row"><div class="col-xs-12 col-sm-6 col-sm-offset-6"><div class="alert alert-warning error_message">Attention! Please enter a country.</div></div></div>';
	exit();
} else if(trim($email) == '') {
	echo '<div class="row"><div class="col-xs-12 col-sm-6 col-sm-offset-6"><div class="alert alert-warning error_message">Attention! Please enter a valid email address.</div></div></div>';
	exit();
} else if(!isEmail($email)) {
	echo '<div class="row"><div class="col-xs-12 col-sm-6 col-sm-offset-6"><div class="alert alert-warning error_message">Attention! You have enter an invalid e-mail address, try again.</div</div>></div>';
	exit();
}

// if(trim($subject) == '') {
// 	echo '<div class="error_message">Attention! Please enter a subject.</div>';
// 	exit();
// } else if(trim($comments) == '') {
// 	echo '<div class="error_message">Attention! Please enter your message.</div>';
// 	exit();
// } else if(!isset($verify) || trim($verify) == '') {
// 	echo '<div class="error_message">Attention! Please enter the verification number.</div>';
// 	exit();
// } else if(trim($verify) != '4') {
// 	echo '<div class="error_message">Attention! The verification number you entered is incorrect.</div>';
// 	exit();
// }

// if(get_magic_quotes_gpc()) {
// 	$comments = stripslashes($comments);
// }


// Configuration option.
// Enter the email address that you want to emails to be sent to.
// Example $address = "joe.doe@yourdomain.com";

//$address = "example@themeforest.net";
$address = "hello@globacom.com";
// $address = "jesse@sharpmachinemedia.com";


// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'You\'ve been contacted by ' . $name . '.';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_body = "You have been contacted by $name, their additional message is as follows." . PHP_EOL . PHP_EOL;
$e_content = "Full Name: $name" . PHP_EOL . PHP_EOL;
$e_content .= "Company: $company" . PHP_EOL . PHP_EOL;
$e_content .= "Address: $your_address \n$city $zip $country" . PHP_EOL . PHP_EOL;
$e_content .= "Moble: $mobile" . PHP_EOL . PHP_EOL;
$e_content .= "Landline: $landline" . PHP_EOL . PHP_EOL;
$e_content .= "Email: $email" . PHP_EOL . PHP_EOL;
$e_content .= "Interested in: \n$option1 \n$option2 \n$option3 \n$option4 \n$option5 \n$option6" . PHP_EOL . PHP_EOL;
$e_reply = "You can contact $name via email at $email.";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $e_subject, $msg, $headers)) {

	// Email has sent successfully, echo a success page.

	echo "<div id='success_page'>";
	echo "<h2>Email Sent Successfully.</h2>";
	echo "<p>Thank you <strong>$name</strong>, your message has been submitted to us. We'll be in touch within the next business day.</p>";
	echo "</div>";

} else {

	echo '<div class="row"><div class="col-xs-12 col-sm-6 col-sm-offset-6"><div class="alert alert-danger">Oops!  Something went wrong.  Try emailing us directly at <a href="mailto:hello@globacom.com">hello@globacom.com</a> instead.</div></div></div>';

}