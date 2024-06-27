<?php
// echo json_encode($_POST);
$to = "nagahama@anytrail.jp";
$headers = "From: sender@example.com";

// Send the email
if (mail($to, "Test email", "Test email", $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}

header("Location: registration-thanks.html");
exit;