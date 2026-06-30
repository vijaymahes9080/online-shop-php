<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once'vendor/autoload.php';

function sendEmail($recipientEmail, $subject, $body, $path , $name) {
  $mail = new PHPMailer(true);

  try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'vijaymahes9080@gmail.com';
    $mail->Password = 'YOUR_GMAIL_APP_PASSWORD'; // Replace with your Gmail App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('vijaymahes9080@gmail.com', $name);
    $mail->addAddress($recipientEmail);
    $mail->addReplyTo('vijaymahes9080@gmail.com', 'No-Reply');

  $mail->AddStringAttachment($path, 'invoice.pdf');

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->AltBody = strip_tags($body); // Plain text version for non-HTML clients

    $mail->send();
    return true; // Indicate successful sending
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    return false; // Indicate failure
  }
}
?>