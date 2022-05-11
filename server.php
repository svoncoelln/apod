<?php

$ch = curl_init("https://api.nasa.gov/planetary/apod?api_key=ar8QWvWS7WdCm2dFrJ4RV0Fhww1WiNUoVb3MBBpy");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

echo $data;

?>