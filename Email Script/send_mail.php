<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
require "./PHPMailer/src/PHPMailer.php";
require "./PHPMailer/src/SMTP.php";
require "./PHPMailer/src/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
// require './phpmailer/vendor/autoload.php';

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $body = $_POST['msg'];

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'jayeshgavale2000@gmail.com';                     //SMTP username
        $mail->Password   = 'fhhj ohdp qjky wosa';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        //Recipients
        $mail->setFrom('jayeshgavale2000@gmail.com', $name);
        $mail->addAddress($email);     //Add a recipient


        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $name . " is Message From Portfolio.";
        $mail->Body    = "Message is".$body. "<br><br> This Sender email : ".$email;

        $mail->send();
        // echo 'Message has been sent';
        echo json_encode(array("error" => false, "message" => "Message has been sent"));
    } catch (Exception $e) {
        // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        echo json_encode(array("error" => true, "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"));
    }
} else {
    echo json_encode(array("error" => true, "message" => "All Fields Required."));
}
