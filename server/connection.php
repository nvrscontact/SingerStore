<?php

function databaseStartConnection(){

    $username = "root";
    $password = "";
    $charset = "utf8";
    $database = "artist";
    $host = "localhost";

    $dsn = "mysql:host=$host;dbname=$database;charset=$charset";
    
    try{
        return new PDO($dsn,$username,$password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
} catch(PDOException $e){
    die($e->getMessage());
}
}

?>