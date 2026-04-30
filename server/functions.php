<?php

require_once "connection.php";

function getProducts(){
    $connection = databaseStartConnection();
    $query = "SELECT * FROM albums";
    $stmt = $connection->prepare($query);
    $stmt->execute();
    return $stmt->fetchAll();
}

function insertProduct($title,$description,$price,$year,$img){
    $connection = databaseStartConnection();
    $query = "INSERT INTO albums (title,description,price,year,img) VALUES (?,?,?,?,?) ";
    $stmt = $connection->prepare($query);
    $stmt->execute([$title,$description,$price,$year,$img]);
}

?>