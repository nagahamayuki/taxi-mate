<?php
// echo json_encode($_POST);
$to = "nagahama@anytrail.jp";
$headers = "From: sender@example.com";

$text = "お名前:" . $_GET["name"] . "\n";
$text = $text . "お住まいの住所:" . $_GET["address"] . "\n";
$text = $text . "生まれ年:" . $_GET["birth_year"] . "\n";
$text = $text . "メールアドレス:" . $_GET["email"] . "\n";
$text = $text . "電話番号:" . $_GET["phone"] . "\n";

// Send the email
if (mail($to, "メールで求人を受け取る に登録がありました / taxi-mate.jp", $text, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}

header("Location: ../taxi-mate/contact/thanks/");
exit;