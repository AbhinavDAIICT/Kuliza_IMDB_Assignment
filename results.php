
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Fixed Top Navbar Example for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/navbar-fixed-top.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="html5shiv.min.js"></script>
      <script src="respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

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
         <form class="navbar-form navbar-left">
            <input type="text" id="firstName" class="form-control" placeholder="Actor's First Name" required autofocus>
         	<input type="text" id="lastName" class="form-control" placeholder="Actor's Last Name" required>
	        <button class="btn btn-primary" type="submit"><span class="glyphicon glyphicon-search"></span></button>
         </form>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

<div class="container">
<div class="table-responsiveness">
	<table  class="table table-hover table-bordered" style="width: 100%">
	  <thead>
      <tr>
        <th>Sr.</th>
        <th>Poster</th>
        <th>Details</th>
        <th>Reviews</th>
       </tr>
       </thead>
		<tr>
			<td id="c-1-1">&nbsp;</td>
			<td id="c-2-1">&nbsp;</td>
			<td id="c-3-1">&nbsp;</td>
			<td>
			<table  class="table table-hover table-bordered" style="width: 100%">
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
		<tr>
			<td id="c-1-2">&nbsp;</td>
			<td id="c-2-2">&nbsp;</td>
			<td id="c-3-2">&nbsp;</td>
			<td>
			<table  class="table table-hover table-bordered" style="width: 100%">
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
		<tr>
			<td id="c-1-3">&nbsp;</td>
			<td id="c-2-3">&nbsp;</td>
			<td id="c-3-3">&nbsp;</td>
			<td>
			<table  class="table table-hover table-bordered" style="width: 100%">
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
	</table>
</div>
</div>
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
