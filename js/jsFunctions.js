function getActorId(){
 if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               var actorId = xmlhttp.responseText;
                alert(actorId);
            }
        };
        xmlhttp.open("GET","http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/actorId.php?actorName=Daniel Radcliffe",false);
        xmlhttp.send();
}
