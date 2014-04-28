/*
Title: Request Info
Description: Your interest says that, just like us, you believe that privacy matters.
*/

<div class="page-header request-info-page-header text-center">
	<div class="container">
		<h1>Thank you for your interest in our services</h1>
	</div>
</div>

<section class="request-info">
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<p class="lead">Your interest says that, just like us, you believe that privacy matters. It also says that you like the new, modern way of safe communications.</p>
			</div>
		</div>
		<div id="contact">
			<div class="row">
				<form role="form" method="post" action="content/request-info/contact.php" name="contactform" id="contactform">
					<div class="col-xs-12">
						<p>Simply fill out the form below and a person from our sales team will be in touch with you within the next business day.  <strong>Because we value your privacy we promise to never share your contact details with other companies.</strong></p>
						<br>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<label for="name">Full name</label>
							<input type="text" class="form-control" id="name">
						</div>
						<div class="form-group">
							<label for="company">Company</label>
							<input type="text" class="form-control" id="company">
						</div>
						<div class="form-group">
							<label for="address">Address</label>
							<input type="text" class="form-control" id="address">
						</div>
						<div class="form-group">
							<label for="city">City</label>
							<input type="text" class="form-control" id="city">
						</div>
						<div class="form-group">
							<label for="zip">Zip Code/Postal Code</label>
							<input type="text" class="form-control" id="zip">
						</div>
						<div class="form-group">
							<label for="mobile">Mobile Phone</label>
							<input type="text" class="form-control" id="mobile">
						</div>
						<div class="form-group">
							<label for="landline">Landline</label>
							<input type="text" class="form-control" id="landline">
						</div>
						<div class="form-group">
							<label for="email">Email</label>
							<input type="email" class="form-control" id="email">
						</div>
					</div>
					<div class="col-sm-6">
						<div class="inspiring-photo hidden-xs">
							<img src="themes/bootstrap/img/blue-lake.jpg" class="img-responsive" width="555" alt="blue-lake">
							<div class="inspiring-photo-words text-center belief">
								“Because your <br>connections are <br>crucial”
							</div>
						</div>
						<br class="hidden-xs">
						<label for="interested">Interested in (Check all that apply):</label>
						<div class="checkbox">
							<input type="checkbox" value="" id="option1" />
							<label for="option1"><span class="sr-only">Checkbox</span></label>
							<div class="checkbox-label">ProShield-Single-Line / SIP account</div>
						</div>
						<div class="checkbox">
							<input type="checkbox" value="" id="option2" />
							<label for="option2"><span class="sr-only">Checkbox</span></label>
							<div class="checkbox-label">ProShield-Multi-Line / VirtualPBX</div>
						</div>
						<div class="checkbox">
							<input type="checkbox" value="" id="option3" />
							<label for="option3"><span class="sr-only">Checkbox</span></label>
							<div class="checkbox-label">ExecutiveShield Multi-Line / VirtualPBX</div>
						</div>
						<button type="submit" class="btn btn-lg btn-primary btn-with-icon" id="submit">
							<div class="btn-label">Submit</div>
							<div class="btn-icon"><span class="icon icon-hand-touch-3"></span></div>
						</button>
					</div>
				</form>
				<div class="col-xs-12">
					<div id="message"></div>
				</div>
			</div>
		</div><!-- END: #contact -->
	</div>
</section><!-- END: .request-info -->
