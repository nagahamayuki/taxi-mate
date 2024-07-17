<?php

$to = "nagahama@anytrail.jp";
$headers = "From: nagahama@anytrail.jp";

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

$webhook_url = "https://hook.us1.make.com/61ljr4ueovmcd7791h6yanpqdj7kt8l9";
// $webhook_url = "https://hook.us1.make.com/sb3s7hkgx380o517s7ny94yw67zhn252"; //ローカルで利用

// Get the URL parameters
$name = $_GET["name"];
$address = $_GET["address"];
$birth_year = $_GET["birth_year"];
$email = $_GET["email"];
$phone = $_GET["phone"];

// Construct the full URL with parameters
$full_url = $webhook_url . "?name=" . urlencode($name) . "&address=" . urlencode($address) . "&birth_year=" . urlencode($birth_year) . "&email=" . urlencode($email) . "&phone=" . urlencode($phone);

// Set the data to be sent in the request body
$data = array(
    "お名前" => $name,
    "お住まいの住所" => $address,
    "生まれ年" => $birth_year,
    "メールアドレス" => $email,
    "電話番号" => $phone,
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

header("Location: ./contact/thanks/");