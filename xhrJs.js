function clickIt(){
var first = document.forms["nameForm"]["firstName"].value;
var last = document.forms["nameForm"]["lastName"].value;
$('#loader').show();
if((first == null || first == "") || (last == null || last == "")){
alert("Both fields are mandatory");
}else{
cleanTable();
var jsonObjects = [];
var movieIds = [];
var countDetails = 0;
var countMovies = 0;
$.when( getActorId(first,last) ).then(function( actorId, textStatus, jqXHR ) {
//  alert( jqXHR.status ); // Alerts 200
//  alert(actorId);
	$.when( getMovieId(actorId) ).then(function( movies, textStatus, jqXHR ) {
		result = $(movies).find(".lister-item-image.ribbonize");
//		console.log(result);
	 	for(var i=0; i<3;i++){
	 		var movieId = $(result[i]).attr('data-tconst');
//	 		alert(movieId);
	 		movieIds.push(movieId);
	 		$.when( fetchDetails(movieId) ).then(function( details, textStatus, jqXHR ) {
		 		//jsonObjects.push(details);
		 		countDetails++;
		 		populateDetails(details,countDetails,movieIds[countDetails-1]);
	 		});
	 		
			$.when( fetchReviews(movieId) ).then(function( reviews, textStatus, jqXHR ) {
				populateReviews(reviews,countMovies);
				countMovies++;
				$('#loader').hide();
			});
	 	}
	});
	
	
});
}
}

function populateReviews(htmlResponse,i){
	div = $(htmlResponse).find("#tn15content");
	divs = $(div[0]).find("div");
	var para = $(div[0]).find("p");
	var para_len = $(para).size();
	//alert(para_len);
	if(para_len > 0){
		for(var j=0;j<para_len&&j<3;j++){
				var	review = $(para[j]).html();
				var h2 = $(divs[j*2]).find("h2");
				var small = $(divs[j*2]).find("small");
				var totalReviews = $(small[0]).html();
				//var reviewCount = totalReviews.split(":")[0];
				var user = $($(divs[j*2]).find("a")[1]).html(); 
				var location = $(small[1]).html();
				var date = $(small[2]).html(); 
				var title = $(h2).html();
				if(title){
				var cell_data = '<b>'+title+'</b> by '+user+' '+location+' | '+totalReviews+'<br>'+review;
				$('#rc-'+(i+1)+'-'+(j+1)).html(cell_data);
				}else{
				
				$('#rc-'+(i+1)+'-1').html('No reviews');

				}
		}		
	}else{
	$('#rc-'+(i+1)+'-1').html('No reviews');
	}
}

function populateDetails(obj,i,movie_id){
result = obj;
            var thumb = result.Poster;
            var title = result.Title;
            var year = result.Year;
            var rated = result.Rated;
            var genre = result.Genre;
            var runtime = result.Runtime;
            var imdbRating = result.imdbRating;
            var imdbVotes = result.imdbVotes;
                   var details= "Title: "+title+"</br>Year: "+year+"</br>Rated: "+rated+"</br>Genre: "+genre+"</br>Runtime: "+runtime+"</br>IMDB Rating: "+imdbRating+"</br>IMDB Votes: "+imdbVotes;
				   var movie_link = "http://www.imdb.com/title/"+movie_id;
				   $( "#r-"+i+"-3" ).html(details);
				   if(thumb != 'N/A'){
				   $( "#r-"+i+"-2" ).html('<a href='+movie_link+'><img src='+thumb+'></img></a>');
				   }else{
				   $( "#r-"+i+"-2" ).html('No Image');
				   }
				   $( "#r-"+i+"-1" ).html(i);
 	}



function fetchDetails(movieId){

return $.ajax({
  url: "http://www.omdbapi.com/?i="+movieId,
  dataType:'json',
 // async:false
  })
  .done(function( data ){
  });

}

function fetchReviews(movieId){
return $.ajax({
  url: "phpPlusJs/fetchReviews.php?movieId="+movieId,
 // async:false
  })
  .done(function( data ){
  });
}

function getActorId(first,last){
return $.ajax({
  url: "http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/actorId.php?first="+first+"&last="+last,
 // async:false
  })
  .done(function( data ){
  });
}

function getMovieId(actorId){
//alert("Movie"+actorId);
var arr;
return $.ajax({
  url: "http://localhost/Kuliza_IMDB_Assignment/phpPlusJs/topMovies.php?actorId="+actorId,
 // async: false,
  })
  .done(function( data ) {
  });
}

function cleanTable(){
	//clear srno, details and poster
	for(var i=1;i<4;i++){
		for(var j=1;j<4;j++){
			$( "#r-"+i+"-"+j ).html("&nbsp");
		}
	}
	//clear reviews
	for(var i=1;i<4;i++){
		for(var j=1;j<4;j++){
			$( "#rc-"+i+"-"+j ).html("&nbsp");
		}
	}
	
}

