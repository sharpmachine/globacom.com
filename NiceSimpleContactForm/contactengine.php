<?php

$EmailFrom = "jessekade@gmail.com";
$EmailTo = "jesse@sharpmachinemedia.com";
$Subject = "Globacom Sales Lead";

$Name = Trim(stripslashes($_POST['Name']));
$Company = Trim(stripslashes($_POST['Company']));
$Address = Trim(stripslashes($_POST['Address']));
$City = Trim(stripslashes($_POST['City']));
$Zip = Trim(stripslashes($_POST['Zip']));
$Mobile = Trim(stripslashes($_POST['Mobile']));
$Landline = Trim(stripslashes($_POST['Landline']));
$Email = Trim(stripslashes($_POST['Email']));
$Option1 = Trim(stripslashes($_POST['Option1']));
$Option2 = Trim(stripslashes($_POST['Option2']));
$Option3 = Trim(stripslashes($_POST['Option3']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";

$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";

$Body .= "Company: ";
$Body .= $Company;
$Body .= "\n";

$Body .= "Address: ";
$Body .= $Address;
$Body .= "\n";

$Body .= "City: ";
$Body .= $City;
$Body .= "\n";

$Body .= "Zip: ";
$Body .= $Zip;
$Body .= "\n";

$Body .= "Mobile: ";
$Body .= $Mobile;
$Body .= "\n";

$Body .= "Landline: ";
$Body .= $Landline;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";

$Body = "I am interested in:";

$Body .= "Option1: ";
$Body .= $Option1;
$Body .= "\n";

$Body .= "Option2: ";
$Body .= $Option2;
$Body .= "\n";

$Body .= "Option3: ";
$Body .= $Option3;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=errorzzz.htm\">";
}
?>