function clickIt(){
var first = document.forms["nameForm"]["firstName"].value;
var last = document.forms["nameForm"]["lastName"].value;
if((first == null || first == "") || (last == null || last == "")){
alert("Both fields are mandatory");
}else{
var abc = getActorId("Daniel","Radcliffe");

var ad = getMovieId(abc.responseText);

var mov = ad.responseText;
result = $(mov).find(".lister-item-image");
var jsonObjects = [];
 	for(var i=0; i<3;i++){
 		var id = $(result[i]).attr('data-tconst');
 	//	alert(id);
 		var details =fetchDetails(id);	
 		var obj = jQuery.parseJSON(details.responseText);
 		jsonObjects.push(obj);
 		details.abort();
 	}
 	abc.abort(); 
 	ad.abort();
 	populateDetails(jsonObjects);  
}
}

function populateDetails(obj){
for(var i=1; i<4;i++){
result = obj[i-1];
            var thumb = result.Poster;
            var title = result.Title;
            var year = result.Year;
            var rated = result.Rated;
            var genre = result.Genre;
            var runtime = result.Runtime;
            var imdbRating = result.imdbRating;
            var imdbVotes = result.imdbVotes;
                   var details= "Title: "+title+"| Year: "+year+"| Rated: "+rated+"| Genre: "+genre+"| Runtime: "+runtime+"| IMDB Rating: "+imdbRating+"| IMDB Votes: "+imdbVotes;
				   $( "#r-"+i+"-3" ).html(details);

          	}   
 	}

function fetchDetails(id){
return $.ajax({
  url: "http://www.omdbapi.com/?i="+id,
  dataType:'json',
  async:false
  })
  .done(function( data ){
  //return data;
  });

/*var count = 0;
for(var i=0; i<3;i++){
 		var id = $(res[i]).attr('data-tconst');
$.getJSON("http://www.omdbapi.com/?i="+id, function(result){
            var thumb = result.Poster;
            var title = result.Title;
            var year = result.Year;
            var rated = result.Rated;
            var genre = result.Genre;
            var runtime = result.Runtime;
            var imdbRating = result.imdbRating;
            var imdbVotes = result.imdbVotes;
            count++;
                   var tdPoster = document.getElementById("c-2-1");
                   if(thumb!="N/A"){
				   var posterNode = document.createElement("img");
				   posterNode.src = thumb;
				   tdPoster.appendChild(posterNode);
				   }else{
				   tdPoster.innerHTML = "No Image";
				   }
				   
                   var tdDetails = document.getElementById("c-3-1");
                   tdDetails.innerHTML = "Title: "+title+"| Year: "+year+"| Rated: "+rated+"| Genre: "+genre+"| Runtime: "+runtime+"| IMDB Rating: "+imdbRating+"| IMDB Votes: "+imdbVotes;

            });
}
*/
}

function getActorId(first,last){
return $.ajax({
  url: "http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/actorId.php?first="+first+"&last="+last,
  async:false
  })
  .done(function( data ){
 // return data;
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
 // return data;
/*  	result = $(data).find(".lister-item-image");
  	for(var i=0; i<3;i++){
 		alert($(result[i]).attr('data-tconst'));
 	}   
*/  });
}

