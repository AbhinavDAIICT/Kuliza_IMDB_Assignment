function clickIt(){
var first = document.forms["nameForm"]["firstName"].value;
var last = document.forms["nameForm"]["lastName"].value;
if((first == null || first == "") || (last == null || last == "")){
alert("Both fields are mandatory");
}else{
//alert("clickIt");
//superFunc("http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/actorId.php?first="+first+"&last="+last,getActorId);
//superFunc("http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/topMovies.php?actorId=nm0705356", getMovieDetails);
//superfun();
var abc = getActorId("Daniel","Radcliffe").responseText;
alert(abc);
var ad = getMovieId(abc).responseText;
result = $(ad).find(".lister-item-image");
  	for(var i=0; i<3;i++){
 		alert($(result[i]).attr('data-tconst'));
 	}   

}
}


function getActorId(first,last){
return $.ajax({
  url: "http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/actorId.php?first="+first+"&last="+last,
  async:false
  })
  .done(function( data ){
  return data;
  });

}

function getMovieId(actorId){
//alert("Movie"+actorId);
var arr;
return $.ajax({
  url: "http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/topMovies.php?actorId="+actorId,
  async: false,
  })
  .done(function( data ) {
  return data;
/*  	result = $(data).find(".lister-item-image");
  	for(var i=0; i<3;i++){
 		alert($(result[i]).attr('data-tconst'));
 	}   
*/  });
}

