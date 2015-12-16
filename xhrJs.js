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
				populateReviews(reviews,countMovies,movieIds);
				countMovies++;
				$('#loader').hide();
			});
	 	}
	});
	
	
});
}
}

function getReviewId(htmlResponse){
titleDiv = $(htmlResponse).find("#tn15title");
movie = $(titleDiv).find("a");
str = $(movie[0]).attr('href');
return(str.split('/')[2]);
}
/*
 *populateReviews function takes in htmlResponse and movie count as arguments.
 *It then extracts data from the response to populate the movie review fields
 *in the review table
*/
function populateReviews(htmlResponse,i,movieIds){
id = getReviewId(htmlResponse);
i = movieIds.indexOf(id);
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
/*
 *populateDetails function takes in json object, movie count and movie id as arguments.
 *It then extracts data from the json objects to populate the movie detail fields
 *in the table
*/
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



/*
 *fetchDetails function takes in movie id as argument.
 *It fetches movie details as json objects from url http://www.omdbapi.com/?i=movieId
 *Returns response containing json object for that movie id
*/
function fetchDetails(movieId){
return $.ajax({
  url: "http://www.omdbapi.com/?i="+movieId,
  dataType:'json',
 // async:false
  })
  .done(function( data ){
  });

}
/*
 *fetchReviews function takes in movie id as argument.
 *It fetches movie details by calling php script "fetchReviews.php"
 *Returns response containing the html content on the IMDB movie review page of the movie
*/

function fetchReviews(movieId){
return $.ajax({
  url: "phpPlusJs/fetchReviews.php?movieId="+movieId,
 // async:false
  })
  .done(function( data ){
  });
}
/*
 *getActorId function takes in first and last name of the actor as argument.
 *It fetches movie details by calling php script "actorId.php"
 *Returns response containing actor id for the specified name
*/
function getActorId(first,last){
return $.ajax({
  url: "phpPlusJs/actorId.php?first="+first+"&last="+last,
 // async:false
  })
  .done(function( data ){
  });
}
/*
 *getMovieId function takes in actor id as argument.
 *It fetches top movies for that actor by calling php script "topMovies.php"
 *Returns response containing html of the IMDB page containing the top movies of the specified actor
*/
function getMovieId(actorId){
//alert("Movie"+actorId);
var arr;
return $.ajax({
  url: "phpPlusJs/topMovies.php?actorId="+actorId,
 // async: false,
  })
  .done(function( data ) {
  });
}
/*
 *cleanTable function clears table content
*/
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
