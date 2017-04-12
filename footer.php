</div>
		</div>

		<!-- Start Footer -->
		<footer class="footer">
			<!-- Start Social Links -->
			<div class="social-links social-links--position main-hidden">
				<ul>
					<li>
						<a href="#"><i class="fa fa-vk" aria-hidden="true"></i></a>
					</li>

					<li>
						<a href="#">
							<img src="img/instagram.svg" class="ic-instagram" alt="" width="20">
						</a>
					</li>

					<li>
						<a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
					</li>

				</ul>
			</div>
			<!-- End Social Links -->
	
			<span class="copyright pull-right">
				© 2016-2017, adabdesign.ru
			</span>
		</footer>
		<!-- End Footer -->
	</div>

	<!-- Start Dots Navigation -->
	<div class="dots-navigation dots-navigation--position visible-lg main-hidden">
		<ul>
			<li>
				<a href="about-us.php">
					<i class="fa fa-circle-o" aria-hidden="true"></i> 
					<i class="fa fa-circle" aria-hidden="true"></i>
					<div class="popover hidden">О&nbsp;нас</div>
				</a>


			</li>
			<li>
				<a href="portfolio.php">
					<i class="fa fa-circle-o" aria-hidden="true"></i> 
					<i class="fa fa-circle" aria-hidden="true"></i>
					<div class="popover hidden">Портфолио</div>
				</a>
			</li>
			<li>
				<a href="blog.php">
					<i class="fa fa-circle-o" aria-hidden="true"></i> 
					<i class="fa fa-circle" aria-hidden="true"></i>
					<div class="popover hidden">Блог</div>
				</a>
			</li>
			<li>
				<a href="clients.php">
					<i class="fa fa-circle-o" aria-hidden="true"></i> 
					<i class="fa fa-circle" aria-hidden="true"></i>
					<div class="popover hidden">Клиенты</div>
				</a>
			</li>
			<li>
				<a href="contacts.php">
					<i class="fa fa-circle-o" aria-hidden="true"></i> 
					<i class="fa fa-circle" aria-hidden="true"></i>
					<div class="popover hidden">Контакты</div>
				</a>
			</li>
		</ul>
	</div>
	<!-- End Dots Navigation -->	
	
	<!-- Content Title Margin Top -->
	<script>
		function contentTitleMargin() {
			setTimeout(function(){
				var obj = document.getElementsByClassName('about-us-content__title')[0];
				if( obj ) {
					var width = obj.clientWidth;
					obj.style.marginTop = width + 'px';
					obj.style.opacity = 1;
				}
			}, 500);
			
		}
		contentTitleMargin();

		window.onresize = contentTitleMargin;
	</script>
	
	<script src="libs/jquery/jquery-1.11.1.min.js"></script>
	<script src="libs/jquery-mousewheel/jquery.mousewheel.min.js"></script>
	<script src="libs/fancybox/jquery.fancybox.pack.js"></script>
	<script src="libs/waypoints/waypoints-1.6.2.min.js"></script>
	<script src="libs/scrollto/jquery.scrollTo.min.js"></script>
	<script src="libs/owl-carousel/owl.carousel.min.js"></script>
	<script src="libs/countdown/jquery.plugin.js"></script>
	<script src="libs/countdown/jquery.countdown.min.js"></script>
	<script src="libs/countdown/jquery.countdown-ru.js"></script>
	<script src="libs/landing-nav/navigation.js"></script>
	
	<script src="libs/counter-up/jquery.counterup.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></script>
	<script src="libs/particles/particles.json"></script>
	<script src="libs/slick/slick.js"></script>
	<script src="libs/masked-input/mask-input.js"></script>
	<!-- <script src="libs/mixitup/mixitup.min.js"></script> -->
	<script src="http://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js"></script>
	<script src="libs/mixitup/mixitup.pagination.js"></script>
	<!-- <script src="http://tseoc.co.uk/chris/jquery.mixitup-pagination.min.js"></script> -->
	<script src="libs/mixitup/mixitup-custom.js"></script>


	<!-- <script src="libs/mixitup/test.js"></script> -->
	
	<script src="js/common.js"></script>

<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
</body>
</html>