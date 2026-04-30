<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

require_once "functions.php";

$method = $_SERVER["REQUEST_METHOD"];

switch($method){
    case 'GET':
        $data = getProducts();
        echo json_encode($data);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"),true);
        $title = $data["title"];
        $description = $data["description"];
        $price = $data["price"];
        $year = $data["year"];
        $img = $data["img"];
        insertProduct($title,$description,$price,$year,$img);
        echo json_encode(["success" => true]);
        break;
}


?>