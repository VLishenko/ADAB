<?php include 'header.php'; ?>

<!-- Start About Us -->
<div class="about-us">

	<div class="col-sm-12 visible-xs">
		<h1 class="small-title">О нас</h1>
	</div>

	<div class="about-us__navigation about-us__navigation--position">
		<ul>
			<li>
				<a href="about-us.php">О студии</a>
			</li>
			<li>
				<a href="about-us-team.php">Команда</a>
			</li>
			<li>
				<a href="about-us-specialization.php">Специализация</a>
			</li>
			<li>
				<a href="about-us-case.php">Кейс ADAB</a>
			</li>                
		</ul>
	</div>
	
	<!-- Start About Us Content -->
	<div class="about-us-content about-us-content--position">
		<div class="about-us-content__title about-us-content__title--styles about-us-title-bg">
			<!-- <div class="about-us-content__title-bg">О нас</div> -->
			<h1>О нас</h1>
		</div>
		
		<!-- Start Team Members -->
		<div class="col-md-11 about-us-main">
			
			<div class="our-team-content our-team-wrap">
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="our-team">

						<img src="images/team-1.png" alt="">

						<div class="our-team__team-member-info">
							<span class="name">Артём Гаврошин</span>
							<span class="position"> арт-директор</span>
						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="our-team">
						

						<img src="images/team-1.png" alt="">

						<div class="our-team__team-member-info">
							<span class="name">Артём Гаврошин</span>
							<span class="position"> арт-директор</span>
						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="our-team">

						<img src="images/team-1.png" alt="">

						<div class="our-team__team-member-info">
							<span class="name">Артём Гаврошин</span>
							<span class="position"> арт-директор</span>
						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="our-team">

						<img src="images/team-1.png" alt="">

						<div class="our-team__team-member-info">
							<span class="name">Артём Гаврошин</span>
							<span class="position"> арт-директор</span>
						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="our-team">
						
						<img src="images/team-1.png" alt="">

						<div class="our-team__team-member-info">
							<span class="name">Артём Гаврошин</span>
							<span class="position"> арт-директор</span>
						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-4 col-xs-6 team-join-flex">
					<div class="team-join-wrap">
						<div class="team-join ">
							<span class="team-join__plus-ic">+</span>
							<!-- <i class="fa fa-plus" aria-hidden="true"></i> -->
							<span>Хочу попасть <br> в команду</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-md-12 team-join-form-wrap hidden">
				<form method="post" class="team-join-form">
					<h2>
						Хочешь попасть в студию? Всё просто.
						Напиши нам на <a href="mailto:hi@adab.studio" class="mail">почту</a> письмо о себе или заполни форму ниже.
					</h2>
					<div class="col-md-4">
						<label for="team-join-name">
							Ваше имя
						</label>
						<input type="text" name="name" 	placeholder="Например, Добрыня" value="" id="team-join-name">
					</div>
					
					<div class="col-md-4">
						<label for="team-join-mail">
							Электронная почта
						</label>
						<input type="email" name="email" placeholder="example@example.com" value="" id="team-join-mail">
					</div>
					
					<div class="col-md-4">
						<label for="team-join-phone">
							Телефон
						</label>
						<input type="tel" name="phone" placeholder="+7 (___) ___-__-__" value="" id="team-join-phone">
					</div>
					
					<div class="col-md-12">
						<label for="eam-join-message">
							Текст послания
						</label>
						<textarea name="comments" placeholder="Расскажи о себе"></textarea id="team-join-message">
					</div>
					
					<div class="col-md-12 send-btn-wrap">
						<input type="submit" name="submit" id="submit" class="submit" value="Отправить">
					</div>
					
				</form>
			</div>
			

		

		</div> <!-- .about-us-main -->
		<!-- End Team Members -->

	</div>
	<!-- End About Us Content -->
</div>
<!-- End About Us -->

<?php include 'footer.php'; ?>
