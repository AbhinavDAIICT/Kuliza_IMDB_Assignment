<?php
$first = $_GET['first'];
$last = $_GET['last'];
$name = $first."%20".$last;
$url = "http://www.imdb.com/xml/find?json=1&nr=1&nm=on&q=".$name;
$str = file_get_contents($url);
$content = file_get_contents($url);
$json = json_decode($content, true);
$names = @$json['name_popular'];
if($names!=null){
$id = $names[0]['id'];
echo $id;
}else{
echo '0';
}
?>