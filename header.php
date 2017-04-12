<!DOCTYPE html>
<!--[if lt IE 7]><html lang="ru" class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html lang="ru" class="lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html lang="ru" class="lt-ie9"><![endif]-->
<!--[if gt IE 8]><!-->
<html lang="ru">
<!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<title>ADAB</title>
	<meta name="description" content="" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="favicon.png" />
	<link rel="stylesheet" href="libs/bootstrap/bootstrap.css" />
	<link rel="stylesheet" href="libs/font-awesome-4.2.0/css/font-awesome.min.css" />
	<link rel="stylesheet" href="libs/fancybox/jquery.fancybox.css" />
	<link rel="stylesheet" href="libs/owl-carousel/owl.carousel.css" />
	<link rel="stylesheet" href="libs/countdown/jquery.countdown.css" />
	<link rel="stylesheet" href="libs/slick/slick-theme.css" />
	<link rel="stylesheet" href="libs/slick/slick.css" />
	<link rel="stylesheet" href="libs/animate/animate.min.css" />
	<link rel="stylesheet" href="css/fonts.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/media.css" />


	<?php

		$url = $_SERVER['REQUEST_URI'];

		switch ($url) {
		case '/':
		$title='<link rel="stylesheet" href="css/home-style.css" />'; break;

		}

		echo $title;
	?>


</head>
<body>
	<!--[if lt IE 9]>
	<script src="libs/html5shiv/es5-shim.min.js"></script>
	<script src="libs/html5shiv/html5shiv.min.js"></script>
	<script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
	<script src="libs/respond/respond.min.js"></script>
	<![endif]-->
	<div id="particles-js"></div>
	<div class="wrapper wrapper--padding wrapper--max-width">
		<div class="conrainer content">
			<div class="row">
				<!-- Start Header -->
				<header class="header">
					<div class="header-logo header-logo--position main-hidden">
						<a href="/">
							<!-- <img src="img/logo.png" alt="ADAB"> -->
							<img src="img/logo.svg" alt="ADAB" width="111">
						</a>
					</div>

					<div class="header-navigation header-navigation--font-style header-navigation--position main-hidden">
						<ul class="header-navigation--list-style visible-md visible-lg">
							<li><a href="about-us.php">О нас </a></li>	
							<li><a href="portfolio.php">Портфолио</a></li>
							<li><a href="blog.php">Блог</a></li>
							<li><a href="clients.php">Клиенты</a></li>
							<li><a href="contacts.php">Контакты</a></li>
						</ul>

						<div class="header-navigation__mobile-navigation header-navigation__mobile-navigation--position hidden-md hidden-lg">
							<!-- <i class="fa fa-bars" aria-hidden="true"></i> -->
							
							<!-- Start Header Menu  -->
							<div class="header_menu">
							    <div class="sandwich">
							        <div class="sw-topper"></div>
							        <div class="sw-bottom"></div>
							        <div class="sw-footer"></div>
							    </div>
							</div>
							<!-- End Header Menu  -->

							<!-- Start Header Nav -->
							<div class="header_nav" id = "container">
							    <ul class="header_nav_list">
							    	<li><a href="/">Главная</a></li>
								<li><a href="about-us.php">О нас </a></li>	
								<li><a href="portfolio.php">Портфолио</a></li>
								<li><a href="blog.php">Блог</a></li>
								<li><a href="clients.php">Клиенты</a></li>
							<li><a href="contacts.php">Контакты</a></li>
							    </ul>
							</div>
							<!-- End Header Nav -->
							
						</div>
					</div>
				</header>
				<!-- End Header -->