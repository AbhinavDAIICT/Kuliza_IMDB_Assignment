function getActorId(){

var first = document.forms["nameForm"]["firstName"].value;
var last = document.forms["nameForm"]["lastName"].value;
if((first == null || first == "") || (last == null || last == "")){
alert("Both fields are mandatory");
}else{

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
        xmlhttp.open("GET","http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/actorId.php?first="+first+"&last="+last,false);
        xmlhttp.send();
        
        }
}
