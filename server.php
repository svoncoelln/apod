<?php

if (isset($_GET["date"]) {
    $date = $_GET["date"];

    $url = "https://api.nasa.gov/planetary/apod?api_key=ar8QWvWS7WdCm2dFrJ4RV0Fhww1WiNUoVb3MBBpy&date=" . "$date";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPGET, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_HTTPS);
    $data = curl_exec($ch);
    curl_close($ch);

    echo json_encode($data);
}
else {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.nasa.gov/planetary/apod?api_key=ar8QWvWS7WdCm2dFrJ4RV0Fhww1WiNUoVb3MBBpy");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPGET, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_HTTPS);
    $data = curl_exec($ch);
    curl_close($ch);

    echo json_encode($data);
}

?>