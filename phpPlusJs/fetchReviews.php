<?php
$id = $_GET['movieId'];
$url = "http://www.imdb.com/title/".$id."/reviews?filter=best&spoiler=hide";
$home = file_get_contents($url);
echo $home;
?>
