
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Kuliza IMDB Movie Search assignment">
    <meta name="author" content="Abhinav Tripathi">
    <link rel="icon" href="images/favicon.ico">

    <title>Kuliza Movie Search</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/navbar-fixed-top.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="html5shiv.min.js"></script>
      <script src="respond.min.js"></script>
    <![endif]-->
    
    <style>
	#loader {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		z-index: 9999;
		opacity:0.85;
		filter: alpha(opacity=85);
		background: url(images/blue_loader.gif) center no-repeat #fff;
	}
    </style>
  </head>
  
  <body>
	<div id="loader" style="display:none;"></div>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">Kuliza Movie Search</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
         <form class="navbar-form navbar-left" name="nameForm" id="nameForm">
            <input type="text" id="firstName" name="firstName" class="form-control" placeholder="Actor's First Name" required>
         	<input type="text" id="lastName" name="lastName" class="form-control" placeholder="Actor's Last Name" required>
	        <input type="submit" id="butt" class="form-control ">
	       </form>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

<div class="container">

<div class="table-responsiveness">
	<table  id ="pTab"class="table table-hover table-bordered" style="width: 100%">
	  <thead>
      <tr>
        <th>Sr.</th>
        <th>Poster</th>
        <th>Details</th>
        <th>Reviews</th>
       </tr>
       </thead>
       <tbody>
		<tr id="r-1">
			<td id="r-1-1">&nbsp;</td>
			<td id="r-1-2">&nbsp;</td>
			<td id="r-1-3">&nbsp;</td>
			<td id="r-1-4">
			<table  id="cTab1" class="table table-hover table-bordered" style="width: 100%">
				<tr>
					<td id="rc-1-1">&nbsp;</td>
				</tr>
				<tr>
					<td id="rc-1-2">&nbsp;</td>
				</tr>
				<tr>
					<td id="rc-1-3">&nbsp;</td>
				</tr>
			</table>
			</td>
		</tr>
		<tr id="r-2">
			<td id="r-2-1">&nbsp;</td>
			<td id="r-2-2">&nbsp;</td>
			<td id="r-2-3">&nbsp;</td>
			<td id="r-2-4">
			<table  id="cTab2" class="table table-hover table-bordered" style="width: 100%">
				<tr>
					<td id="rc-2-1">&nbsp;</td>
				</tr>
				<tr>
					<td id="rc-2-2">&nbsp;</td>
				</tr>
				<tr>
					<td id="rc-2-3">&nbsp;</td>
				</tr>
			</table>
			</td>
		</tr>
		<tr id="r-3">
			<td id="r-3-1">&nbsp;</td>
			<td id="r-3-2">&nbsp;</td>
			<td id="r-3-3">&nbsp;</td>
			<td id="r-3-4">
			<table  id="cTab3" class="table table-hover table-bordered" style="width: 100%">
				<tr>
					<td id="rc-3-1">&nbsp;</td>
				</tr>
				<tr>
					<td id="rc-3-2">&nbsp;</td>
				</tr>
				<tr>
					<td id="rc-3-3">&nbsp;</td>
				</tr>
			</table>
			</td>
		</tr>
		</tbody>
	</table>
</div>




</div>
<div class="container">
<!-- div to temporarily hold results from top rated movies page-->
 <div id="topMoviesDiv"  style="display:none">
	hello
</div>

 <div id="reviewDiv">
	
</div>
</div>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
 <script src="jquery.min.js"></script>
    <script src="xhrJs.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>
    <script type="text/javascript">
		$('#nameForm').submit(function () {
		 clickIt();
		 return false;
		});

	</script>

  </body>
</html>
