<?php

// $to = "nagahama@anytrail.jp";
$to = "nagahama@anytrail.jp";
$headers = "From: nagahama@anytrail.jp";


$commute = implode(",", $_GET["commute"]);
$changeReason = implode(",", $_GET["changeReason"]);
$attractive = implode(",", $_GET["attractive"]);


$text = "お住まいの地域:" . $_GET["area"] . "\n";
$text = $text . "通勤手段:" . $commute . "\n";
$text = $text . "最寄駅:" . $_GET["station"] . "\n";
$text = $text . "転職時期:" . $_GET["jobdate"] . "\n";
$text = $text . "今回の転職理由について教えてください:" . $changeReason . "\n";
$text = $text . "タクシー業界に感じている魅力について教えてください:" . $attractive . "\n";
$text = $text . "お名前(姓):" . $_GET["firstname"] . "\n";
$text = $text . "お名前(名):" . $_GET["lastname"] . "\n";
$text = $text . "年代:" . $_GET["age"] . "\n";
$text = $text . "電話番号:" . $_GET["phone"] . "\n";
$text = $text . "メールアドレス:" . $_GET["email"] . "\n";

// Send the email
if (mail($to, "転職支援サービスに登録 がありました / taxi-mate.jp", $text, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}

header("Location: ../taxi-mate/registration/thanks/");
exit;