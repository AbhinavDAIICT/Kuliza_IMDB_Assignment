<?php
$id = $_GET['actorId'];
$url = "http://www.imdb.com/filmosearch?sort=user_rating&amp;explore=title_type&amp;role=".$id."&ref_=filmo_ref_typ&sort=user_rating,desc&mode=detail&page=1&title_type=movie";
$home = file_get_contents($url);
echo "<div id=\"tempDiv\" style=\"display:none\">".$home."</div>";
?>