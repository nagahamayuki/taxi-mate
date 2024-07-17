<?php

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

$webhook_url = "https://hook.us1.make.com/han76gjtlud87lq42t8yqnjqeghyu780";
// $webhook_url = "https://hook.us1.make.com/sb3s7hkgx380o517s7ny94yw67zhn252"; //ローカルで利用

// Get the URL parameters
$area = $_GET["area"];
$commute = $commute;
$station = $_GET["station"];
$jobdate = $_GET["jobdate"];
$changeReason = $changeReason;
$attractive = $attractive;
$firstname = $_GET["firstname"];
$lastname = $_GET["lastname"];
$age = $_GET["age"];
$phone = $_GET["phone"];
$email = $_GET["email"];

// Construct the full URL with parameters
$full_url = $webhook_url . "?area=" . urlencode($area) . "&commute=" . urlencode($commute) . "&station=" . urlencode($station) . "&jobdate=" . urlencode($jobdate) . "&changeReason=" . urlencode($changeReason) . "&attractive=" . urlencode($attractive) . "&firstname=" . urlencode($firstname) . "&lastname=" . urlencode($lastname) . "&age=" . urlencode($age) . "&phone=" . urlencode($phone) . "&email=" . urlencode($email);

// Set the data to be sent in the request body
$data = array(
   "お住まいの地域" => $area,
   "通勤手段" => $commute,
   "最寄駅" => $station,
   "転職時期" => $jobdate,
   "今回の転職理由について教えてください" => $changeReason,
   "タクシー業界に感じている魅力について教えてください" => $attractive,
   "お名前(姓)" => $firstname,
   "お名前(名)" => $lastname,
   "年代" => $age,
   "電話番号" => $phone,
   "メールアドレス" => $email,
);

// Convert the data to JSON
$data_json = json_encode($data);

// Initialize cURL
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $full_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_json);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Content-Type: application/json"
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request
$response = curl_exec($ch);

// Check for any cURL errors
if(curl_errno($ch)){
    $error_msg = curl_error($ch);
    echo "cURL error: " . $error_msg;
} else {
    // Print the response
    echo "Webhook response: " . $response;
}

// Close the cURL session
curl_close($ch);

header("Location: ./registration/thanks/");