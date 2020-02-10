<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comment = $_POST['comment'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта rm.by")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("chernous.eu@yandex.by", $subject, $comment, $headers);
    echo $success;
